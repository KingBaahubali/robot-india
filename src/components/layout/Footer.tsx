import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="font-serif text-2xl tracking-widest text-[#E8C988]">
            ROBOT INDIA
          </Link>
          <p className="text-muted text-sm max-w-[200px] leading-relaxed">
            India's robot discovery and consultancy platform.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-6 text-sm">Explore</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link href="/robots" className="hover:text-[#E8C988] transition-colors">Explore robots</Link></li>
            <li><Link href="/brands" className="hover:text-[#E8C988] transition-colors">Brands</Link></li>
            <li><Link href="/guides" className="hover:text-[#E8C988] transition-colors">Guides</Link></li>
            <li><Link href="/advice" className="hover:text-[#E8C988] transition-colors">Get advice</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-6 text-sm">Company</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link href="/about" className="hover:text-[#E8C988] transition-colors">About us</Link></li>
            <li><Link href="/manufacturers" className="hover:text-[#E8C988] transition-colors">For manufacturers</Link></li>
            <li><Link href="/careers" className="hover:text-[#E8C988] transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-6 text-sm">Help</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link href="/guides" className="hover:text-[#E8C988] transition-colors">Buying guides</Link></li>
            <li><Link href="/faqs" className="hover:text-[#E8C988] transition-colors">FAQs</Link></li>
            <li><Link href="/terms" className="hover:text-[#E8C988] transition-colors">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-[#E8C988] transition-colors">Privacy</Link></li>
            <li><Link href="/disclosures" className="hover:text-[#E8C988] transition-colors">Buying disclosures</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
