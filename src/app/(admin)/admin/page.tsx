import { ArrowUpRight, Clock, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-serif mb-2">Dashboard</h2>
        <p className="text-muted">Overview of enquiries, tasks, and system status.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1a2226] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-muted">New Enquiries</h3>
            <ArrowUpRight className="w-5 h-5 text-accent" />
          </div>
          <p className="text-4xl font-serif">12</p>
          <p className="text-sm text-muted mt-2">Requires triage today</p>
        </div>
        
        <div className="bg-[#1a2226] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-muted">Overdue Follow-ups</h3>
            <Clock className="w-5 h-5 text-orange-400" />
          </div>
          <p className="text-4xl font-serif">3</p>
          <p className="text-sm text-muted mt-2">Past 24 hour SLA</p>
        </div>

        <div className="bg-[#1a2226] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-muted">System Alerts</h3>
            <AlertCircle className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-4xl font-serif">0</p>
          <p className="text-sm text-muted mt-2">All services operational</p>
        </div>
      </div>

      <div className="bg-[#1a2226] border border-white/10 rounded-xl p-6 mt-8">
        <h3 className="font-medium mb-4 text-lg">Recent Enquiries</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted uppercase bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Use Case</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium">Acme Manufacturing</td>
                <td className="px-6 py-4">Quote</td>
                <td className="px-6 py-4 text-muted">Inspection</td>
                <td className="px-6 py-4">
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-md text-xs">New</span>
                </td>
                <td className="px-6 py-4 text-muted">2 hours ago</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium">Delhi Public School</td>
                <td className="px-6 py-4">Demo</td>
                <td className="px-6 py-4 text-muted">Education</td>
                <td className="px-6 py-4">
                  <span className="bg-white/10 text-muted px-2 py-1 rounded-md text-xs">Triaged</span>
                </td>
                <td className="px-6 py-4 text-muted">5 hours ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
