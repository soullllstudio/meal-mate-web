import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-row">
        <Link href="/" className="brand-logo" aria-label="MealMate home">
          <Image src="/assets/app-icon.png" alt="MealMate logo" width={38} height={38} priority />
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
