import Link from 'next/link';
import { ArrowRight, Search, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-20 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111619] via-[#1a2226] to-[#111619] -z-10" />
        
        <div className="max-w-[1280px] mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">
              Real robots, real applications. For a brighter India.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground">
              Find the right robot <br className="hidden md:block"/> for India
            </h1>
            <p className="text-lg text-muted max-w-xl">
              Compare robots, check India pricing, connect with trusted vendors and get expert guidance.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-2 rounded-full max-w-2xl flex flex-col md:flex-row md:items-center mt-8 gap-2 md:gap-0">
              <div className="flex-1 flex items-center px-4 gap-2 md:border-r border-white/10">
                <Search className="w-5 h-5 text-muted" />
                <input 
                  type="text" 
                  placeholder="Search robots, use cases or brands..." 
                  className="bg-transparent border-none focus:outline-none text-foreground w-full py-2"
                />
              </div>
              <div className="hidden md:flex items-center px-4 gap-2 text-muted whitespace-nowrap">
                <MapPin className="w-4 h-4" />
                <span>All India</span>
              </div>
              <button className="bg-accent text-[#111619] px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors ml-0 md:ml-2 w-full md:w-auto">
                Explore robots
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted pt-4">
              <span>Popular:</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">Delivery robot</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">STEM kit</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">Surveillance</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">Agriculture</span>
            </div>
          </div>
          
          <div className="flex-1 w-full relative hidden lg:block">
            {/* Placeholder for hero image */}
            <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden">
               <div className="text-center z-10">
                 <p className="font-serif text-2xl italic text-muted/50">"Robots for a more capable India"</p>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 w-full -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            "Education & STEM", "Research & Development", "Industry & Manufacturing", 
            "Inspection & Surveillance", "Hospitality & Retail", "Agriculture & Outdoor", "Home & Personal"
          ].map((category) => (
            <Link href={`/robots?category=${encodeURIComponent(category)}`} key={category} className="bg-[#1a2226] border border-white/10 rounded-xl p-4 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-colors shadow-lg">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-accent">
                <div className="w-5 h-5 border-2 border-current rounded-sm" />
              </div>
              <span className="text-xs font-medium leading-tight text-foreground">{category}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        
        {/* Editorial Feature */}
        <div className="col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent mb-4 block">Featured Story</span>
            <h2 className="text-2xl font-serif mb-4 text-foreground leading-snug">How Indian schools are using robotics to build real world skills</h2>
            <p className="text-sm text-muted mb-6">
              From Bengaluru to Bhubaneswar, robotics is moving from extra-curricular to essential learning.
            </p>
          </div>
          <Link href="/guides/schools-robotics" className="text-accent flex items-center gap-2 text-sm font-semibold hover:underline">
            Read the full story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Robots */}
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">Featured Robots</span>
            <Link href="/robots" className="text-accent text-sm font-semibold flex items-center gap-1 hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Robot Card 1 */}
            <Link href="/robots/emo-desktop" className="bg-[#1a2226] border border-white/10 rounded-2xl p-4 flex flex-col hover:bg-white/10 transition-colors">
              <div className="aspect-square bg-white/5 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                 <span className="text-xs text-muted/50 font-serif">Image</span>
              </div>
              <h3 className="font-semibold text-sm mb-1 text-foreground">EMO Desktop Companion</h3>
              <div className="mt-auto pt-4 flex flex-col gap-1">
                <span className="text-lg font-serif text-foreground">₹49,900</span>
                <span className="text-xs text-muted">Indicative price</span>
              </div>
            </Link>

            {/* Robot Card 2 */}
            <Link href="/robots/stem-rover" className="bg-[#1a2226] border border-white/10 rounded-2xl p-4 flex flex-col hover:bg-white/10 transition-colors">
              <div className="aspect-square bg-white/5 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                 <span className="text-xs text-muted/50 font-serif">Image</span>
              </div>
              <h3 className="font-semibold text-sm mb-1 text-foreground">STEM Rover Kit</h3>
              <div className="mt-auto pt-4 flex flex-col gap-1">
                <span className="text-lg font-serif text-foreground">₹8,500</span>
                <span className="text-xs text-muted">Indicative price</span>
              </div>
            </Link>

            {/* Robot Card 3 */}
            <Link href="/robots/unitree-go2" className="bg-[#1a2226] border border-white/10 rounded-2xl p-4 flex flex-col hover:bg-white/10 transition-colors">
              <div className="aspect-square bg-white/5 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                 <span className="text-xs text-muted/50 font-serif">Image</span>
              </div>
              <h3 className="font-semibold text-sm mb-1 text-foreground">Unitree Go2 Research</h3>
              <div className="mt-auto pt-4 flex flex-col gap-1">
                <span className="text-lg font-serif text-foreground">₹3,75,000</span>
                <span className="text-xs text-muted">Quote required</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 w-full py-8 mt-4 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-sm mb-1 text-foreground">Real use cases from Indian customers</h4>
              <p className="text-xs text-muted">schools, businesses and researchers</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-sm mb-1 text-foreground">Transparent India pricing</h4>
              <p className="text-xs text-muted">with indicative ranges</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-sm mb-1 text-foreground">Support clarity</h4>
              <p className="text-xs text-muted">know who sells, services and warranties</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
