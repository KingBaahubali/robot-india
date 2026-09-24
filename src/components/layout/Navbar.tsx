import Link from 'next/link';
import { Search, User, Globe } from 'lucide-react';

export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-background sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-serif text-xl font-bold tracking-tight">
            ROBOT<span className="text-accent">INDIA</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted">
            <Link href="/robots" className="hover:text-foreground transition-colors">Explore Robots</Link>
            <Link href="/guides" className="hover:text-foreground transition-colors">Guides</Link>
            <Link href="/solutions/education" className="hover:text-foreground transition-colors">For Schools</Link>
            <Link href="/solutions/business" className="hover:text-foreground transition-colors">For Business</Link>
            <Link href="/news" className="hover:text-foreground transition-colors">Market Brief</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input 
              type="text" 
              placeholder="Search robots..." 
              className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:border-accent w-48 transition-colors text-foreground"
            />
          </div>
          
          <div className="flex items-center gap-2 text-sm font-medium">
            <Globe className="w-4 h-4" />
            <span>INR</span>
          </div>

          <Link href="/login" className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
