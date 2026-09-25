import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-foreground pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[600px] flex items-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
          <Image 
            src="/hero.jpg" 
            alt="Hero Robot Dog" 
            fill 
            className="object-cover object-right md:object-[70%_center]"
            priority
          />
        </div>
        
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full pt-12">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-6 max-w-2xl">
            Find the right robot.<br />
            <span className="text-foreground/90">Understand every detail.</span>
          </h1>
          <p className="text-lg text-foreground/80 mb-10 max-w-xl">
            Explore robots for your home, business or research.
          </p>

          <div className="relative max-w-md mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input 
              type="text"
              placeholder="Search a robot, brand or task..."
              className="w-full bg-[#121312]/80 border border-white/10 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-[#E8C988] transition-colors"
            />
          </div>

          <div className="flex items-center gap-4">
            <Link href="/robots" className="bg-[#E8C988] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#E8C988]/90 transition-colors flex items-center gap-2">
              Explore robots <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guides" className="bg-transparent border border-white/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-colors">
              Help me choose
            </Link>
          </div>
          
          <div className="absolute bottom-8 right-6">
            <Link href="/robots?type=dogs" className="text-xs text-muted hover:text-[#E8C988] flex items-center gap-1">
              Discover robot dogs <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 py-20 space-y-32">
        
        {/* 2. Browse by robot type */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl text-[#E8C988]">Browse by robot type</h2>
            <Link href="/robots" className="text-sm text-muted hover:text-[#E8C988] flex items-center gap-1 transition-colors">
              View all types <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: 'Humanoids', desc: 'Human-like robots for work and everyday life' },
              { title: 'Robot dogs', desc: 'Agile, versatile and always ready' },
              { title: 'Robotic pets', desc: 'Companion robots for home and learning' },
              { title: 'Wheeled robots', desc: 'Mobile robots for delivery and service' },
              { title: 'Robotic arms', desc: 'Precision, power and automation for industry' },
            ].map((type) => (
              <Link href={`/robots?category=${type.title.toLowerCase()}`} key={type.title} className="group flex flex-col block border border-white/5 bg-[#0A0A0A] hover:border-white/10 transition-colors rounded-sm overflow-hidden">
                <div className="aspect-[4/5] bg-[#121312] w-full border-b border-white/5" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-[15px] mb-1 group-hover:text-[#E8C988] transition-colors">{type.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{type.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#E8C988] mt-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Find robots for your needs */}
        <section>
          <div className="mb-8">
            <h2 className="font-serif text-3xl text-[#E8C988]">Find robots for your needs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: 'Home & Personal', desc: 'Everyday life and companionship' },
              { title: 'Business & Services', desc: 'Serve, deliver and assist' },
              { title: 'Industry & Fieldwork', desc: 'Manufacture, inspect and automate' },
              { title: 'Learning & Research', desc: 'Learn, build and experiment' },
            ].map((need) => (
              <Link href={`/robots?need=${need.title.toLowerCase()}`} key={need.title} className="group block border border-white/5 bg-[#0A0A0A] hover:border-white/10 transition-colors rounded-sm overflow-hidden">
                <div className="aspect-video bg-[#121312] w-full border-b border-white/5" />
                <div className="p-4">
                  <h3 className="font-medium text-[15px] mb-1 group-hover:text-[#E8C988] transition-colors">{need.title}</h3>
                  <p className="text-xs text-muted mb-3">{need.desc}</p>
                  <ArrowRight className="w-4 h-4 text-[#E8C988] opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Explore by brand */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl text-[#E8C988]">Explore by brand</h2>
            <Link href="/brands" className="text-sm text-muted hover:text-[#E8C988] flex items-center gap-1 transition-colors">
              View all brands <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[500px]">
            {/* Unitree Main */}
            <div className="lg:col-span-2 border border-white/5 bg-[#0A0A0A] rounded-sm p-12 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 max-w-sm">
                <h3 className="font-serif text-5xl mb-4 text-white">Unitree</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Advanced legged and humanoid robots for research, industry and everyday use.
                </p>
                <Link href="/brands/unitree" className="inline-flex border border-white/20 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-white/5 transition-colors items-center gap-2">
                  Explore the range <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-[60%] h-full bg-[#121312]" />
            </div>
            
            {/* Side Brands */}
            <div className="flex flex-col gap-4">
              {[
                { title: 'Miko', desc: 'Social robots for learning and companionship' },
                { title: 'PUDU', desc: 'Commercial robots for service and delivery' },
                { title: 'Dreame', desc: 'Home robots for a smarter everyday' },
              ].map((brand) => (
                <Link href={`/brands/${brand.title.toLowerCase()}`} key={brand.title} className="flex-1 border border-white/5 bg-[#0A0A0A] hover:border-white/10 transition-colors rounded-sm flex items-center p-6 group overflow-hidden relative">
                  <div className="relative z-10 w-1/2">
                    <h3 className="font-serif text-2xl mb-2">{brand.title}</h3>
                    <p className="text-xs text-muted leading-relaxed mb-4">{brand.desc}</p>
                    <ArrowRight className="w-4 h-4 text-[#E8C988] opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute right-0 top-0 w-1/2 h-full bg-[#121312]" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Explore robots */}
        <section>
          <div className="mb-8">
            <h2 className="font-serif text-3xl text-[#E8C988]">Explore robots</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Unitree Go2', desc: 'Agile and intelligent quadruped robot for research, education and real-world applications.' },
              { title: 'Miko 3', desc: 'Social companion robot for children, families and learning environments.' },
              { title: 'PUDU BellaBot', desc: 'Autonomous delivery robot for restaurants, hotels, retail and public spaces.' },
            ].map((robot) => (
              <div key={robot.title} className="border border-white/5 bg-[#0A0A0A] rounded-sm flex flex-col overflow-hidden group">
                <div className="aspect-video bg-[#121312] w-full border-b border-white/5 relative" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl mb-2">{robot.title}</h3>
                  <p className="text-xs text-muted mb-4 leading-relaxed flex-1">{robot.desc}</p>
                  
                  <div className="mb-5">
                    <span className="inline-block border border-white/10 text-xs px-2 py-1 text-muted rounded-sm">Sourcing assistance</span>
                  </div>

                  <Link href={`/robots/${robot.title.toLowerCase().replace(/ /g, '-')}`} className="w-full bg-[#E8C988] text-black py-2.5 rounded-sm text-sm font-semibold hover:bg-[#E8C988]/90 transition-colors flex items-center justify-center gap-2 mb-3">
                    Explore robot <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <div className="flex items-center justify-between text-xs text-[#E8C988]">
                    <span className="hover:underline cursor-pointer">Request India price</span>
                    <label className="flex items-center gap-2 cursor-pointer text-muted hover:text-foreground">
                      <input type="checkbox" className="rounded-sm border-white/20 bg-transparent" />
                      Compare
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Mid CTA */}
        <section className="relative border border-white/5 rounded-sm overflow-hidden py-24 px-12 text-center flex flex-col items-center bg-[#0A0A0A]">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-4xl mb-4 text-white">One robot or an entire operation.<br/>Start with what you need to achieve.</h2>
            <p className="text-muted mb-10">Tell us about the task, your budget and where the robot will be used.</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/advice" className="bg-[#E8C988] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#E8C988]/90 transition-colors">
                Help me choose a robot
              </Link>
              <Link href="/contact" className="border border-white/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-colors">
                Discuss a business project
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Buying & ownership guides */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl text-[#E8C988]">Buying & ownership guides</h2>
            <Link href="/guides" className="text-sm text-muted hover:text-[#E8C988] flex items-center gap-1 transition-colors">
              View all guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Buying your first robot in India', desc: 'Key considerations, use cases and expert tips to get started.' },
              { title: 'What does owning a robot really cost?', desc: 'A practical guide to total cost of ownership in India.' },
              { title: 'Robot dogs: what can they actually do?', desc: 'Capabilities, real world applications and limitations.' },
            ].map((guide) => (
              <Link href={`/guides/${guide.title.toLowerCase().replace(/ /g, '-')}`} key={guide.title} className="group block">
                <div className="aspect-[16/7] bg-[#121312] w-full border border-white/5 rounded-sm mb-4 overflow-hidden relative" />
                <h3 className="font-medium text-[15px] mb-2 group-hover:text-[#E8C988] transition-colors">{guide.title}</h3>
                <p className="text-xs text-muted mb-3 leading-relaxed">{guide.desc}</p>
                <div className="text-xs text-[#E8C988] flex items-center gap-1">
                  Read guide <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 8. Partner CTA */}
        <section className="border-t border-b border-white/5 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl mb-2 text-white">Bring your robots closer to Indian customers.</h3>
            <p className="text-sm text-muted">Explore listing, distribution and India market support.</p>
          </div>
          <Link href="/manufacturers" className="bg-[#E8C988] text-black px-6 py-3 rounded-sm text-sm font-semibold hover:bg-[#E8C988]/90 transition-colors flex items-center gap-2">
            Partner with Robot India <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </div>
  );
}
