import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';
import { createClient } from '@/lib/auth/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy_key_for_build',
});

// Zod schema for structured output validation
const AIResponseSchema = z.object({
  candidates: z.array(z.object({
    robot_slug: z.string(),
    reason: z.string(),
    missing_facts: z.array(z.string()),
  })),
  suggested_next_step: z.string(),
});

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const body = await request.json();
    
    // 1. Fetch allowed public catalog data based on basic filters
    const { data: robots } = await supabase
      .from('robots')
      .select('slug, model, availability_class')
      .eq('published_status', true)
      .limit(10);
      
    if (!robots || robots.length === 0) {
      return NextResponse.json({ error: 'No catalog data available for AI to assess.' }, { status: 503 });
    }

    // 2. Call OpenAI with timeout and strict structured output
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000); // 20s timeout

    const completion = await openai.chat.completions.create({
      model: process.env.AI_MODEL || 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are the Robot India advisor. Based on the user requirements, recommend up to 3 robots from the provided catalog. Only use the provided catalog facts. Do not invent prices or availability. Ensure output is valid JSON matching the schema.
          Catalog context: ${JSON.stringify(robots)}`
        },
        { role: 'user', content: JSON.stringify(body.requirements) }
      ],
      response_format: { type: 'json_object' },
      max_tokens: 500,
    }, { signal: controller.signal });

    clearTimeout(timeout);

    const rawContent = completion.choices[0]?.message?.content;
    if (!rawContent) throw new Error("Empty response from AI");

    // 3. Validate output schema
    const parsedData = AIResponseSchema.parse(JSON.parse(rawContent));

    // 4. Verify returned IDs actually exist in the fetched catalog
    const validCatalogSlugs = new Set(robots.map(r => r.slug));
    const sanitizedCandidates = parsedData.candidates.filter(c => validCatalogSlugs.has(c.robot_slug));

    return NextResponse.json({
      candidates: sanitizedCandidates,
      suggested_next_step: parsedData.suggested_next_step
    });
    
  } catch (error: any) {
    console.error('AI Advisor Error:', error);
    if (error.name === 'AbortError') {
      return NextResponse.json({ error: 'AI request timed out' }, { status: 504 });
    }
    return NextResponse.json({ error: 'Failed to generate recommendations' }, { status: 500 });
  }
}
