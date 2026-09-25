import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080908]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-widest text-[#E8C988]">
          ROBOT INDIA
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/90">
          <Link href="/robots" className="hover:text-[#E8C988] transition-colors">Explore robots</Link>
          <Link href="/brands" className="hover:text-[#E8C988] transition-colors">Brands</Link>
          <Link href="/guides" className="hover:text-[#E8C988] transition-colors">Guides</Link>
          <Link href="/advice" className="hover:text-[#E8C988] transition-colors">Get advice</Link>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-foreground/80 hover:text-[#E8C988] transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-foreground/80 hover:text-[#E8C988] transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
