import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-row">
        <Link href="/" className="brand-logo" aria-label="MealMate home">
          <Image src="/assets/masot.png" alt="MealMate logo" width={34} height={34} priority />
        </Link>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/support">Support</Link>
        </nav>
        <p className="copyright">© 2026 MealMate</p>
      </div>
    </footer>
  );
}
