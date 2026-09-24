import Link from 'next/link';
import { Plus, Search, Filter, MoreHorizontal, Edit, Eye, Trash2 } from 'lucide-react';

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif mb-2">Catalog</h2>
          <p className="text-muted">Manage robots, variants, and pricing.</p>
        </div>
        <Link href="/admin/catalog/new" className="bg-accent text-[#111619] px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-accent/90 transition-colors">
          <Plus className="w-4 h-4" />
          Add Robot
        </Link>
      </div>

      <div className="bg-[#1a2226] border border-white/10 rounded-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input 
              type="text" 
              placeholder="Search by model, brand, or slug..." 
              className="w-full bg-white/5 border border-white/10 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-sm border border-white/10 rounded-md hover:bg-white/5">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted uppercase bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-3 font-medium">Model</th>
                <th className="px-6 py-3 font-medium">Brand</th>
                <th className="px-6 py-3 font-medium">Availability</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Last Updated</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-md flex-shrink-0" />
                    <div>
                      <div className="font-medium">EMO Desktop Companion</div>
                      <div className="text-xs text-muted">/robots/emo-desktop</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">Living AI</td>
                <td className="px-6 py-4">In stock in India</td>
                <td className="px-6 py-4">
                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md text-xs">Published</span>
                </td>
                <td className="px-6 py-4 text-muted">Oct 12, 2026</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 hover:bg-white/10 rounded text-muted hover:text-foreground transition-colors"><Eye className="w-4 h-4" /></button>
                    <button className="p-1.5 hover:bg-white/10 rounded text-muted hover:text-foreground transition-colors"><Edit className="w-4 h-4" /></button>
                    <button className="p-1.5 hover:bg-red-500/20 rounded text-muted hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
              
              {/* Row 2 */}
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-md flex-shrink-0" />
                    <div>
                      <div className="font-medium">STEM Rover Kit</div>
                      <div className="text-xs text-muted">/robots/stem-rover</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">MakerLab</td>
                <td className="px-6 py-4">In stock in India</td>
                <td className="px-6 py-4">
                  <span className="bg-amber-500/20 text-amber-400 px-2 py-1 rounded-md text-xs">Draft</span>
                </td>
                <td className="px-6 py-4 text-muted">Oct 15, 2026</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 hover:bg-white/10 rounded text-muted hover:text-foreground transition-colors"><Eye className="w-4 h-4" /></button>
                    <button className="p-1.5 hover:bg-white/10 rounded text-muted hover:text-foreground transition-colors"><Edit className="w-4 h-4" /></button>
                    <button className="p-1.5 hover:bg-red-500/20 rounded text-muted hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
