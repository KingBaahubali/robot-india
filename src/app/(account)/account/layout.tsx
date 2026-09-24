import Link from 'next/link';
import { Briefcase, FileText, MessageSquare, Ticket, LogOut } from 'lucide-react';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#111619] text-foreground">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-[#1a2226] flex flex-col">
        <div className="p-6 md:h-16 flex items-center md:border-b border-white/10">
          <Link href="/" className="font-serif text-xl font-bold tracking-tight">
            ROBOT<span className="text-accent">INDIA</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-4 md:py-6 flex flex-row md:flex-col overflow-x-auto space-x-2 md:space-x-0 md:space-y-1">
          <Link href="/account" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-white/5 text-foreground whitespace-nowrap">
            <Briefcase className="w-5 h-5 text-accent" />
            My Projects
          </Link>
          <Link href="/account/proposals" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted hover:bg-white/5 hover:text-foreground transition-colors whitespace-nowrap">
            <FileText className="w-5 h-5" />
            Proposals & Quotes
          </Link>
          <Link href="/account/support" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted hover:bg-white/5 hover:text-foreground transition-colors whitespace-nowrap">
            <Ticket className="w-5 h-5" />
            Support Tickets
          </Link>
        </nav>
        
        <div className="p-4 border-t border-white/10 hidden md:block">
          <button className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium rounded-md text-muted hover:bg-white/5 hover:text-foreground transition-colors">
            <LogOut className="w-5 h-5" />
            Log out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-12 overflow-auto">
        {children}
      </main>
    </div>
  );
}
