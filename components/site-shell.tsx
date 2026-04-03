import Link from "next/link";
import { PlaneTakeoff, Star } from "lucide-react";
import { navLinks } from "@/lib/data";
import { ButtonLink } from "@/components/ui";
import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="brand" aria-label="NimbusAir home">
            <span className="brand__mark">
              <PlaneTakeoff size={20} />
            </span>
            <span className="brand__name">
              <strong>NimbusAir</strong>
              <span>Flight UI concept</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <ButtonLink href="/book">Explore booking</ButtonLink>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="footer">
        <div className="site-footer__inner">
          <div className="brand" style={{ gap: 10 }}>
            <span className="brand__mark">
              <Star size={18} />
            </span>
            <span className="brand__name">
              <strong>Created by anointedthedeveloper</strong>
              <span>
                Powered by{" "}
                <a href="https://anobyte.online" target="_blank" rel="noreferrer">
                  anobyte
                </a>
              </span>
            </span>
          </div>

          <div className="footer-links">
            <a href="https://github.com/anointedthedeveloper" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://anobyte.online" target="_blank" rel="noreferrer">
              anobyte.online
            </a>
            <a href="/status">Flight status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
