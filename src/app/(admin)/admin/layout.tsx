import Link from 'next/link';
import { LayoutDashboard, FileText, Box, Users, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#111619] flex text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#1a2226] hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link href="/admin" className="font-serif text-xl font-bold tracking-tight">
            ROBOT<span className="text-accent">INDIA</span>
            <span className="text-xs text-muted ml-2 font-sans font-normal uppercase tracking-widest">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-white/5 text-foreground">
            <LayoutDashboard className="w-5 h-5 text-accent" />
            Dashboard
          </Link>
          <Link href="/admin/editorial" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted hover:bg-white/5 hover:text-foreground transition-colors">
            <FileText className="w-5 h-5" />
            Editorial
          </Link>
          <Link href="/admin/catalog" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted hover:bg-white/5 hover:text-foreground transition-colors">
            <Box className="w-5 h-5" />
            Catalog
          </Link>
          <Link href="/admin/crm" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted hover:bg-white/5 hover:text-foreground transition-colors">
            <Users className="w-5 h-5" />
            CRM
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted hover:bg-white/5 hover:text-foreground transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium rounded-md text-muted hover:bg-white/5 hover:text-foreground transition-colors">
            <LogOut className="w-5 h-5" />
            Log out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-white/10 bg-[#1a2226] flex items-center justify-between px-8">
          <h1 className="font-serif text-lg">Admin Console</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-accent text-[#111619] flex items-center justify-center font-bold text-sm">
              S
            </div>
          </div>
        </header>
        
        {/* Content area */}
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
