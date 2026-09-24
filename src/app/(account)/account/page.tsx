import Link from 'next/link';
import { Clock, ArrowRight, Package, CheckCircle2 } from 'lucide-react';

export default function AccountDashboard() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-serif mb-2">My Projects</h1>
        <p className="text-muted">Track your active deployments, orders, and service history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Active Project Card */}
        <div className="bg-[#1a2226] border border-white/10 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="bg-accent/20 text-accent px-2 py-1 rounded-md text-xs font-medium mb-3 inline-block">Active Deployment</span>
              <h3 className="font-semibold text-lg">Unitree Go2 Fleet Setup</h3>
              <p className="text-sm text-muted mt-1">Ref: PRJ-2026-889</p>
            </div>
            <Package className="w-8 h-8 text-white/20" />
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-muted">Site Survey Completed</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-muted">Proposal Accepted</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-foreground font-medium">Awaiting Delivery (Est. Oct 28)</span>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-50">
              <div className="w-4 h-4 rounded-full border border-current" />
              <span className="text-muted">Installation & Training</span>
            </div>
          </div>
          
          <Link href="/account/projects/889" className="block text-center w-full bg-white/5 text-foreground py-2 border border-white/10 rounded-lg font-medium text-sm hover:bg-white/10 transition-colors">
            View Project Timeline
          </Link>
        </div>

        {/* Recent Quotes */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Recent Quotes</h3>
          
          <div className="bg-[#1a2226] border border-white/10 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium">STEM Rover Lab Kit (x15)</h4>
              <span className="text-xl font-serif">₹1,27,500</span>
            </div>
            <p className="text-xs text-muted mb-4">Valid until Oct 30, 2026</p>
            <Link href="/account/proposals/445" className="text-accent text-sm font-semibold flex items-center gap-1 hover:underline">
              Review & Accept <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-center items-center h-32 text-center border-dashed">
            <p className="text-sm text-muted">Looking for something else?</p>
            <Link href="/find-a-robot" className="text-accent text-sm font-semibold mt-2 hover:underline">
              Start a new enquiry
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
