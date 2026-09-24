import Link from 'next/link';
import { Filter, ChevronDown, Check, ArrowRight } from 'lucide-react';

export default function RobotDirectory() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filters
          </h2>
          <button className="text-xs text-accent hover:underline">Clear all</button>
        </div>

        <div className="space-y-6">
          {/* Use Case Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Use case</h3>
            <div className="space-y-2">
              {[
                { label: 'Education & STEM', count: 24 },
                { label: 'Research & Development', count: 18 },
                { label: 'Industry & Manufacturing', count: 21 },
                { label: 'Inspection & Surveillance', count: 10 },
                { label: 'Hospitality & Retail', count: 9 },
              ].map(item => (
                <label key={item.label} className="flex items-center gap-2 text-sm text-muted cursor-pointer hover:text-foreground">
                  <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent focus:ring-accent focus:ring-offset-background" />
                  <span className="flex-1">{item.label}</span>
                  <span className="text-xs">({item.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Budget (INR)</h3>
            <div className="space-y-2">
              {[
                { label: 'Under 25,000', count: 12 },
                { label: '25,000 - 1,00,000', count: 18 },
                { label: '1,00,000 - 5,00,000', count: 16 },
                { label: 'Above 5,00,000', count: 9 },
              ].map(item => (
                <label key={item.label} className="flex items-center gap-2 text-sm text-muted cursor-pointer hover:text-foreground">
                  <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent focus:ring-accent focus:ring-offset-background" />
                  <span className="flex-1">{item.label}</span>
                  <span className="text-xs">({item.count})</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Availability */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-muted cursor-pointer hover:text-foreground">
                <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent" />
                <span className="flex-1">In stock in India</span>
              </label>
              <label className="flex items-center gap-2 text-sm text-muted cursor-pointer hover:text-foreground">
                <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent" />
                <span className="flex-1">Quote required</span>
              </label>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl font-serif">32 robots found</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted">Sort by:</span>
            <button className="flex items-center gap-2 text-sm bg-white/5 border border-white/10 px-3 py-1.5 rounded-md hover:bg-white/10">
              Relevance <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="bg-[#1a2226] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="p-4 flex items-center justify-between relative z-10">
              <label className="flex items-center gap-2 text-xs font-medium cursor-pointer bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent" />
                Compare
              </label>
            </div>
            <div className="aspect-square bg-white/5 -mt-12 flex items-center justify-center">
              <span className="text-xs text-muted/50 font-serif">Image</span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded w-fit mb-3">In stock in India</span>
              <h3 className="font-semibold text-lg mb-1">EMO Desktop Companion</h3>
              <p className="text-xs text-muted mb-4 line-clamp-2">A friendly desktop robot with expressive reactions, great for homes, offices and learning.</p>
              
              <div className="mt-auto border-t border-white/5 pt-4">
                <p className="text-2xl font-serif">₹49,900</p>
                <p className="text-xs text-muted mb-4">Indicative price</p>
                <Link href="/robots/emo-desktop" className="block text-center w-full bg-accent text-[#111619] py-2 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors">
                  View details
                </Link>
              </div>
            </div>
          </div>
          
          {/* Product Card 2 */}
          <div className="bg-[#1a2226] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="p-4 flex items-center justify-between relative z-10">
              <label className="flex items-center gap-2 text-xs font-medium cursor-pointer bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent" />
                Compare
              </label>
            </div>
            <div className="aspect-square bg-white/5 -mt-12 flex items-center justify-center">
              <span className="text-xs text-muted/50 font-serif">Image</span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded w-fit mb-3">In stock in India</span>
              <h3 className="font-semibold text-lg mb-1">STEM Rover Kit</h3>
              <p className="text-xs text-muted mb-4 line-clamp-2">Build and program your own rover. Ideal for schools and DIY enthusiasts.</p>
              
              <div className="mt-auto border-t border-white/5 pt-4">
                <p className="text-2xl font-serif">₹8,500</p>
                <p className="text-xs text-muted mb-4">Indicative price</p>
                <Link href="/robots/stem-rover" className="block text-center w-full bg-accent text-[#111619] py-2 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors">
                  View details
                </Link>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-[#1a2226] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="p-4 flex items-center justify-between relative z-10">
              <label className="flex items-center gap-2 text-xs font-medium cursor-pointer bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent" />
                Compare
              </label>
            </div>
            <div className="aspect-square bg-white/5 -mt-12 flex items-center justify-center">
              <span className="text-xs text-muted/50 font-serif">Image</span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded w-fit mb-3">Quote required</span>
              <h3 className="font-semibold text-lg mb-1">Unitree Go2 Research</h3>
              <p className="text-xs text-muted mb-4 line-clamp-2">High mobility quadruped for research, inspection and development.</p>
              
              <div className="mt-auto border-t border-white/5 pt-4">
                <p className="text-2xl font-serif">₹3,75,000</p>
                <p className="text-xs text-muted mb-4">Indicative price</p>
                <Link href="/robots/unitree-go2" className="block text-center w-full bg-accent text-[#111619] py-2 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors">
                  View details
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
