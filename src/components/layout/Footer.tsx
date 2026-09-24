import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 mt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="font-serif text-xl font-bold tracking-tight mb-4 inline-block">
            ROBOT<span className="text-accent">INDIA</span>
          </Link>
          <p className="text-sm text-muted">
            Discover, compare, and source the right robots for homes and businesses across India.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif font-semibold mb-4 text-foreground">Platform</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/robots" className="hover:text-foreground transition-colors">Robot Directory</Link></li>
            <li><Link href="/compare" className="hover:text-foreground transition-colors">Compare Options</Link></li>
            <li><Link href="/solutions" className="hover:text-foreground transition-colors">Business Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif font-semibold mb-4 text-foreground">Resources</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/guides" className="hover:text-foreground transition-colors">Buyer Guides</Link></li>
            <li><Link href="/news" className="hover:text-foreground transition-colors">Market Brief</Link></li>
            <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif font-semibold mb-4 text-foreground">Work with us</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/partners/apply" className="hover:text-foreground transition-colors">Partner Application</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Support</Link></li>
            <li><Link href="/policies" className="hover:text-foreground transition-colors">Privacy & Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 mt-12 pt-8 border-t border-white/5 text-xs text-muted flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Robot India. All rights reserved.</p>
      </div>
    </footer>
  );
}
