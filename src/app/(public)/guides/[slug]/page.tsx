import Link from 'next/link';
import { ArrowLeft, Clock, User, CheckCircle2 } from 'lucide-react';

export default function GuidePage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-8 py-12">
      <Link href="/guides" className="text-sm text-accent hover:underline flex items-center gap-2 mb-8">
        <ArrowLeft className="w-4 h-4" /> All Guides
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Buying a robot in India: what to check before you pay</h1>
        <p className="text-xl text-muted mb-6">
          A practical guide to choosing the right robot, understanding total cost, and ensuring reliable support in India.
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <span>By Ananya Rao</span>
          </div>
          <span>•</span>
          <span>12 Mar 2024</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> 8 min read
          </div>
        </div>
      </header>

      <div className="aspect-[21/9] bg-white/5 rounded-2xl mb-12 flex items-center justify-center border border-white/10">
        <span className="text-muted/50 font-serif">Featured Image</span>
      </div>

      <article className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-a:text-accent hover:prose-a:text-accent/80">
        <h2>1. Understand the total cost</h2>
        <p>
          The price tag is only part of the story. Consider software, accessories, shipping, installation and annual support when evaluating cost.
        </p>
        
        <div className="my-8 overflow-x-auto">
          <table className="w-full text-sm text-left border border-white/10 rounded-lg overflow-hidden">
            <thead className="bg-white/5 text-muted font-medium">
              <tr>
                <th className="p-4 border-b border-white/10">Cost component</th>
                <th className="p-4 border-b border-white/10">Typical range (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="p-4">Robot hardware</td>
                <td className="p-4">₹8,000 - ₹5,00,000+</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-4">Software / licenses</td>
                <td className="p-4">₹0 - ₹1,00,000</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-4">Accessories (batteries, grippers)</td>
                <td className="p-4">₹5,000 - ₹1,00,000</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-4">Shipping & import (if applicable)</td>
                <td className="p-4">₹5,000 - ₹75,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Key checklist before you buy</h2>
        <ul className="list-none pl-0 space-y-4 my-8">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span><strong>Confirm use case and environment:</strong> Ensure the robot is rated for your indoor/outdoor requirements and payload.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span><strong>Verify India warranty and service:</strong> Ask exactly who handles repairs and where parts are stocked locally.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span><strong>Understand data and privacy:</strong> Check if the robot streams video to overseas servers or processes locally.</span>
          </li>
        </ul>
      </article>

      <div className="mt-16 p-8 bg-[#1a2226] border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-serif mb-2">Need help choosing?</h3>
          <p className="text-muted text-sm">Talk to our experts for a personalized shortlist based on your exact requirements.</p>
        </div>
        <Link href="/find-a-robot" className="whitespace-nowrap bg-accent text-[#111619] px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">
          Get a shortlist →
        </Link>
      </div>
    </div>
  );
}
