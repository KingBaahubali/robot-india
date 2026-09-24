import Link from 'next/link';
import { Check, X, ArrowLeft, Trash2 } from 'lucide-react';

export default function ComparePage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-12">
      <div className="mb-12">
        <Link href="/robots" className="text-sm text-accent hover:underline flex items-center gap-2 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to robots
        </Link>
        <h1 className="text-4xl font-serif mb-2">Compare robots</h1>
        <p className="text-muted">Compare features, specifications, and pricing for your selected robots.</p>
      </div>

      <div className="w-full overflow-x-auto pb-8">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="w-1/4 p-4 text-left border-b border-white/10 align-bottom">
                <span className="text-sm text-muted font-normal">Comparing 2 items</span>
              </th>
              
              {/* Product 1 */}
              <th className="w-1/4 p-4 border-b border-white/10 relative group">
                <button className="absolute top-4 right-4 p-1 rounded hover:bg-white/10 text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="aspect-square bg-white/5 rounded-xl mb-4 w-full flex items-center justify-center">
                  <span className="text-xs text-muted/50 font-serif">Image</span>
                </div>
                <h3 className="text-lg font-semibold text-left mb-2">EMO Desktop Companion</h3>
                <p className="text-2xl font-serif text-left">₹49,900</p>
                <p className="text-xs text-muted text-left mb-4">Indicative price</p>
                <button className="w-full bg-accent text-[#111619] py-2 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors">
                  View details
                </button>
              </th>

              {/* Product 2 */}
              <th className="w-1/4 p-4 border-b border-white/10 relative group">
                <button className="absolute top-4 right-4 p-1 rounded hover:bg-white/10 text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="aspect-square bg-white/5 rounded-xl mb-4 w-full flex items-center justify-center">
                  <span className="text-xs text-muted/50 font-serif">Image</span>
                </div>
                <h3 className="text-lg font-semibold text-left mb-2">STEM Rover Kit</h3>
                <p className="text-2xl font-serif text-left">₹8,500</p>
                <p className="text-xs text-muted text-left mb-4">Indicative price</p>
                <button className="w-full bg-accent text-[#111619] py-2 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors">
                  View details
                </button>
              </th>
              
              {/* Empty Slot */}
              <th className="w-1/4 p-4 border-b border-white/10">
                <div className="aspect-square border-2 border-dashed border-white/10 rounded-xl mb-4 w-full flex flex-col items-center justify-center gap-2 hover:border-accent hover:bg-white/5 cursor-pointer transition-all">
                  <span className="text-2xl font-light text-muted">+</span>
                  <span className="text-sm font-medium text-muted">Add a robot</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* Row Group 1 */}
            <tr>
              <td colSpan={4} className="py-6 px-4 font-serif text-xl border-b border-white/5 text-accent">General Info</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 border-b border-white/5 text-muted font-medium">Best for</td>
              <td className="p-4 border-b border-white/5">Home, office, basic education</td>
              <td className="p-4 border-b border-white/5">School & college STEM learning</td>
              <td className="p-4 border-b border-white/5"></td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 border-b border-white/5 text-muted font-medium">Setup difficulty</td>
              <td className="p-4 border-b border-white/5">Easy</td>
              <td className="p-4 border-b border-white/5">Moderate</td>
              <td className="p-4 border-b border-white/5"></td>
            </tr>
            
            {/* Row Group 2 */}
            <tr>
              <td colSpan={4} className="py-6 px-4 font-serif text-xl border-b border-white/5 text-accent">Support in India</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 border-b border-white/5 text-muted font-medium">Local Warranty</td>
              <td className="p-4 border-b border-white/5 flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Yes (Vendor warranty)</td>
              <td className="p-4 border-b border-white/5 flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Yes (Vendor warranty)</td>
              <td className="p-4 border-b border-white/5"></td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 border-b border-white/5 text-muted font-medium">Service Centers</td>
              <td className="p-4 border-b border-white/5">Bengaluru, Hyderabad</td>
              <td className="p-4 border-b border-white/5">Pan-India (Mail-in)</td>
              <td className="p-4 border-b border-white/5"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
