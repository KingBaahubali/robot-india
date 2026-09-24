import Link from 'next/link';
import { Search, Filter, Phone, Mail, FileText, ChevronRight } from 'lucide-react';

export default function CRMPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif mb-2">CRM Pipeline</h2>
          <p className="text-muted">Manage enquiries, leads, and active opportunities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Pipeline Column: New & Triaged */}
        <div className="bg-[#1a2226] border border-white/10 rounded-xl p-4 flex flex-col h-[calc(100vh-200px)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">New / Triage</h3>
            <span className="bg-white/10 text-muted px-2 py-0.5 rounded text-xs">2</span>
          </div>
          
          <div className="space-y-3 overflow-y-auto pr-2">
            <div className="bg-white/5 border border-white/10 p-3 rounded-lg cursor-pointer hover:border-accent transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-muted">REQ-8902</span>
                <span className="text-xs text-accent">2h ago</span>
              </div>
              <h4 className="font-medium mb-1">Acme Corp Logistics</h4>
              <p className="text-xs text-muted line-clamp-2 mb-3">Looking for 5 automated guided vehicles for our new warehouse in Pune. Budget approved.</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-white/10 text-xs py-1.5 rounded hover:bg-white/20 transition-colors">Assess Fit</button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-3 rounded-lg cursor-pointer hover:border-accent transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-muted">REQ-8901</span>
                <span className="text-xs text-red-400">1d ago</span>
              </div>
              <h4 className="font-medium mb-1">Rahul Sharma</h4>
              <p className="text-xs text-muted line-clamp-2 mb-3">Robot dog for personal home security and companionship.</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-white/10 text-xs py-1.5 rounded hover:bg-white/20 transition-colors">Assess Fit</button>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Column: Qualified */}
        <div className="bg-[#1a2226] border border-white/10 rounded-xl p-4 flex flex-col h-[calc(100vh-200px)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Qualified / Assessment</h3>
            <span className="bg-white/10 text-muted px-2 py-0.5 rounded text-xs">1</span>
          </div>
          
          <div className="space-y-3 overflow-y-auto pr-2">
            <div className="bg-white/5 border border-white/10 p-3 rounded-lg cursor-pointer hover:border-accent transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-muted">REQ-8895</span>
                <span className="text-xs text-muted">3d ago</span>
              </div>
              <h4 className="font-medium mb-1">DPS Bangalore</h4>
              <p className="text-xs text-muted line-clamp-2 mb-3">STEM lab setup for 200 students. Needs curriculum support.</p>
              <div className="flex gap-2 mt-2 pt-2 border-t border-white/10">
                <button className="p-1.5 hover:bg-white/10 rounded text-muted hover:text-foreground"><Mail className="w-3 h-3" /></button>
                <button className="p-1.5 hover:bg-white/10 rounded text-muted hover:text-foreground"><Phone className="w-3 h-3" /></button>
                <button className="ml-auto text-xs text-accent hover:underline">Draft Proposal</button>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Column: Proposal */}
        <div className="bg-[#1a2226] border border-white/10 rounded-xl p-4 flex flex-col h-[calc(100vh-200px)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Proposal Sent</h3>
            <span className="bg-white/10 text-muted px-2 py-0.5 rounded text-xs">1</span>
          </div>
          
          <div className="space-y-3 overflow-y-auto pr-2">
            <div className="bg-white/5 border border-accent p-3 rounded-lg cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-muted">REQ-8880</span>
                <span className="text-xs text-emerald-400 font-medium">₹3.75 L</span>
              </div>
              <h4 className="font-medium mb-1">Tech Mahindra Lab</h4>
              <p className="text-xs text-muted mb-3">Unitree Go2 Research Edition</p>
              <div className="flex items-center gap-2 text-xs text-muted bg-white/5 p-2 rounded">
                <FileText className="w-3 h-3" /> v2 Sent Oct 20
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Column: Won/Active */}
        <div className="bg-[#1a2226] border border-white/10 rounded-xl p-4 flex flex-col h-[calc(100vh-200px)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Won / Fulfillment</h3>
            <span className="bg-white/10 text-muted px-2 py-0.5 rounded text-xs">1</span>
          </div>
          
          <div className="space-y-3 overflow-y-auto pr-2">
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg cursor-pointer hover:border-emerald-500/40 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-emerald-400">PRJ-8871</span>
              </div>
              <h4 className="font-medium mb-1">Taj Hotels Mumbai</h4>
              <p className="text-xs text-muted mb-3">3x Delivery Robots</p>
              <button className="w-full bg-emerald-500/20 text-emerald-400 text-xs py-1.5 rounded hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-1">
                View Project <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
