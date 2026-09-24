import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default function NewRobotPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/catalog" className="p-2 hover:bg-white/10 rounded-md transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h2 className="text-3xl font-serif">Add Robot</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-white/10 rounded-md text-sm font-medium hover:bg-white/5 transition-colors">
            Save Draft
          </button>
          <button className="bg-accent text-[#111619] px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-accent/90 transition-colors">
            <Save className="w-4 h-4" /> Publish
          </button>
        </div>
      </div>

      <div className="bg-[#1a2226] border border-white/10 rounded-xl p-6 space-y-8">
        
        {/* Core Info */}
        <section className="space-y-4">
          <h3 className="text-lg font-medium border-b border-white/10 pb-2">Core Identity</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted">Brand *</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent">
                <option value="">Select a brand...</option>
                <option value="living-ai">Living AI</option>
                <option value="unitree">Unitree</option>
                <option value="makerlab">MakerLab</option>
              </select>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted">Model Name *</label>
              <input 
                type="text" 
                placeholder="e.g. Unitree Go2 Research" 
                className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-medium text-muted">URL Slug *</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-white/10 bg-white/5 text-muted sm:text-sm">
                  /robots/
                </span>
                <input 
                  type="text" 
                  placeholder="unitree-go2" 
                  className="flex-1 w-full bg-white/5 border border-white/10 rounded-none rounded-r-md px-3 py-2 text-sm focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Commerce */}
        <section className="space-y-4">
          <h3 className="text-lg font-medium border-b border-white/10 pb-2">Commercial Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-medium text-muted">Availability Class *</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent">
                <option value="available">Available via seller (In stock)</option>
                <option value="confirm">Confirm with supplier (Quote required)</option>
                <option value="preorder">Pre-order</option>
                <option value="announced">Announced</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted">Price Basis</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent">
                <option value="exact">Exact Landed Price</option>
                <option value="indicative">Indicative (From)</option>
                <option value="quote">Quote Only</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted">Indicative Price (INR)</label>
              <input 
                type="number" 
                placeholder="49900" 
                className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
