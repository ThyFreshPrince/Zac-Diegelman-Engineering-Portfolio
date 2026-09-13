import { useState, type ReactNode } from "react";
import { ArrowUpRight, Download, Linkedin, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { site } from "@/data/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/coursework", label: "Coursework" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return (
    <div className="noise min-h-[100dvh] overflow-x-clip bg-[#f4f1ea] text-[#1f2528]">
      <header className="sticky top-0 z-40 border-b border-[#1f2528]/10 bg-[#f4f1ea]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[78px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="focus-ring group flex items-center gap-3"
            data-testid="link-logo"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f2528] text-xs font-semibold text-[#f4f1ea] transition-colors group-hover:bg-[#285d7c]">
              ZD
            </span>
            <span className="hidden text-sm font-semibold tracking-[-.02em] text-[#1f2528] sm:block">
              Zac Diegelman
            </span>
          </Link>
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
                className={`focus-ring text-xs transition-colors ${location === item.href ? "text-[#285d7c]" : "text-[#747873] hover:text-[#1f2528]"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Zac's LinkedIn profile"
              data-testid="link-header-linkedin"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-[#747873] transition-colors hover:bg-[#dfe5e7] hover:text-[#285d7c]"
            >
              <Linkedin size={16} />
            </a>
            <button
              type="button"
              data-testid="button-mobile-menu"
              onClick={() => setOpen(!open)}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-[#ebe8e1] text-[#1f2528] md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#1f2528]/10 bg-[#f4f1ea] px-5 py-3 md:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  className={`border-b border-[#1f2528]/10 py-4 text-sm ${location === item.href ? "text-[#285d7c]" : "text-[#747873]"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="dark-panel">
        <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-12 lg:py-20">
          <div>
            <div className="mb-4 font-mono text-xs text-[#b7cddd]">
              ZD / ME 2027
            </div>
            <h2 className="max-w-sm text-2xl font-semibold tracking-[-.04em]">
              Physical systems, considered from the first sketch to the next
              iteration.
            </h2>
          </div>
          <div>
            <div className="eyebrow mb-4 text-[#b7cddd]">Navigate</div>
            <div className="grid grid-cols-2 gap-y-3 text-sm text-[#d9d8d1]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`link-footer-${item.label.toLowerCase()}`}
                  className="hover:text-[#b7cddd]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow mb-4 text-[#b7cddd]">Contact</div>
            <a
              href={`mailto:${site.email}`}
              data-testid="link-footer-email"
              className="block text-sm text-[#d9d8d1] hover:text-[#b7cddd]"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="link-footer-linkedin"
              className="mt-3 inline-flex items-center gap-1 text-sm text-[#d9d8d1] hover:text-[#b7cddd]"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="border-t border-[#f4f1ea]/15 px-5 py-4 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1480px] justify-between font-mono text-[10px] uppercase tracking-[.12em] text-[#a9aaa3]">
            <span>Charlotte, NC</span>
            <span>© {new Date().getFullYear()} Zac Diegelman</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="eyebrow mb-4">{eyebrow}</div>
      <h2 className="text-4xl font-semibold tracking-[-.065em] text-[#1f2528] sm:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#656b69]">
          {copy}
        </p>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  secondary = false,
  download = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  download?: boolean;
}) {
  const cls = `focus-ring inline-flex items-center gap-2 px-5 py-3 text-xs transition-all ${secondary ? "border border-[#1f2528]/25 text-[#1f2528] hover:border-[#285d7c] hover:text-[#285d7c]" : "bg-[#1f2528] text-[#f4f1ea] hover:bg-[#285d7c]"}`;
  return !download && href.startsWith("/") ? (
    <Link
      href={href}
      data-testid={`link-cta-${href.replace(/\W/g, "")}`}
      className={cls}
    >
      {children}
      <ArrowUpRight size={14} />
    </Link>
  ) : (
    <a
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noreferrer"
      data-testid={`link-cta-${download ? "download" : "external"}`}
      className={cls}
    >
      {children}
      {download ? <Download size={14} /> : <ArrowUpRight size={14} />}
    </a>
  );
}
