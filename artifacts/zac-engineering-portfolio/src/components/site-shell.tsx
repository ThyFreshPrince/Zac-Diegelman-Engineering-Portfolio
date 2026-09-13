import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Download, Linkedin, Menu, X } from 'lucide-react';
import { site } from '@/data/site';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/coursework', label: 'Coursework' },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return (
    <div className="noise min-h-[100dvh] bg-[#080d12] text-slate-200">
      <header className="sticky top-0 z-40 border-b border-[#22303a] bg-[#080d12]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="focus-ring group flex items-center gap-3" data-testid="link-logo">
            <span className="flex h-9 w-9 items-center justify-center border border-[#59d8ef]/60 font-mono text-sm text-[#59d8ef] transition-colors group-hover:bg-[#59d8ef] group-hover:text-[#080d12]">ZD</span>
            <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">Zac Diegelman</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`} className={`focus-ring font-mono text-[11px] uppercase tracking-[.14em] transition-colors ${location === item.href ? 'text-[#59d8ef]' : 'text-slate-500 hover:text-slate-100'}`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="Open Zac's LinkedIn profile" data-testid="link-header-linkedin" className="focus-ring flex h-9 w-9 items-center justify-center border border-[#22303a] text-slate-400 transition-colors hover:border-[#59d8ef] hover:text-[#59d8ef]">
              <Linkedin size={15} />
            </a>
            <Link href="/contact" data-testid="link-header-contact" className="focus-ring hidden items-center gap-2 border border-[#59d8ef]/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[.14em] text-[#59d8ef] transition-colors hover:bg-[#59d8ef] hover:text-[#080d12] sm:flex">
              Start a conversation <ArrowUpRight size={13} />
            </Link>
            <button type="button" data-testid="button-mobile-menu" onClick={() => setOpen(!open)} className="focus-ring flex h-9 w-9 items-center justify-center border border-[#22303a] text-slate-300 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && <div className="border-t border-[#22303a] bg-[#0b1219] px-5 py-4 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} data-testid={`link-mobile-${item.label.toLowerCase()}`} className={`border-b border-[#22303a] py-4 font-mono text-xs uppercase tracking-[.15em] ${location === item.href ? 'text-[#59d8ef]' : 'text-slate-400'}`}>{item.label}</Link>)}
            <Link href="/contact" onClick={() => setOpen(false)} data-testid="link-mobile-contact" className="mt-4 flex items-center justify-between bg-[#59d8ef] px-4 py-3 font-mono text-xs uppercase tracking-[.12em] text-[#080d12]">Start a conversation <ArrowUpRight size={15} /></Link>
          </nav>
        </div>}
      </header>
      <main>{children}</main>
      <footer className="border-t border-[#22303a] bg-[#0a1016]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-12">
          <div>
            <div className="mb-3 font-mono text-xs text-[#59d8ef]">ZD / ME 2027</div>
            <h2 className="max-w-sm text-2xl font-semibold tracking-[-.04em] text-slate-100">Physical systems, considered from the first sketch to the next iteration.</h2>
          </div>
          <div>
            <div className="eyebrow mb-4">Navigate</div>
            <div className="grid grid-cols-2 gap-y-3 text-sm text-slate-400">{navItems.map((item) => <Link key={item.href} href={item.href} data-testid={`link-footer-${item.label.toLowerCase()}`} className="hover:text-[#59d8ef]">{item.label}</Link>)}<Link href="/contact" data-testid="link-footer-contact" className="hover:text-[#59d8ef]">Contact</Link></div>
          </div>
          <div>
            <div className="eyebrow mb-4">Open channel</div>
            <a href={`mailto:${site.email}`} data-testid="link-footer-email" className="block text-sm text-slate-300 hover:text-[#59d8ef]">{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" data-testid="link-footer-linkedin" className="mt-3 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-[#59d8ef]">LinkedIn <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="border-t border-[#22303a] px-5 py-4 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] justify-between font-mono text-[10px] uppercase tracking-[.15em] text-slate-600"><span>Charlotte, NC</span><span>© {new Date().getFullYear()} Zac Diegelman</span></div></div>
      </footer>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="mb-10 max-w-3xl"><div className="eyebrow mb-4">{eyebrow}</div><h2 className="text-3xl font-semibold tracking-[-.055em] text-slate-100 sm:text-5xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">{copy}</p>}</div>;
}

export function ButtonLink({ href, children, secondary = false, download = false }: { href: string; children: ReactNode; secondary?: boolean; download?: boolean }) {
  const cls = `focus-ring inline-flex items-center gap-2 px-4 py-3 font-mono text-[10px] uppercase tracking-[.13em] transition-all ${secondary ? 'border border-[#334451] text-slate-300 hover:border-[#59d8ef] hover:text-[#59d8ef]' : 'bg-[#59d8ef] text-[#071017] hover:bg-[#b3edf6]'}`;
  return !download && href.startsWith('/') ? <Link href={href} data-testid={`link-cta-${href.replace(/\W/g, '')}`} className={cls}>{children}<ArrowUpRight size={14} /></Link> : <a href={href} download={download} target={download ? undefined : '_blank'} rel="noreferrer" data-testid={`link-cta-${download ? 'download' : 'external'}`} className={cls}>{children}{download ? <Download size={14} /> : <ArrowUpRight size={14} />}</a>;
}
