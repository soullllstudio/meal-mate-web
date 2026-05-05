import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export const metadata = {
  title: "Terms of Use",
  description: "MealMate terms of use, subscription details, and service limitations.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="page-shell legal-shell">
          <h1>Terms of Use</h1>
          <p className="last-updated">Last updated: May 5, 2026</p>

          <section className="legal-section">
            <p>By using MealMate, you agree to these Terms of Use.</p>
          </section>

          <section className="legal-section">
            <h2>Service summary</h2>
            <p>
              MealMate provides calorie and macro tracking, quick meal logging, barcode and nutrition label scanning,
              AI-assisted meal recognition, and saved food library workflows.
            </p>
          </section>

          <section className="legal-section">
            <h2>Subscriptions</h2>
            <p>MealMate offers two auto-renewable plans:</p>
            <ul>
              <li>Monthly Plan: $4.99 per month</li>
              <li>Annual Plan: $44.99 per year</li>
            </ul>
            <p>Subscription billing and renewals are managed through your app marketplace account settings.</p>
          </section>

          <section className="legal-section">
            <h2>Informational nature</h2>
            <p>
              MealMate is for informational wellness support only. It is not a substitute for professional medical
              advice, diagnosis, or treatment.
            </p>
          </section>

          <section className="legal-section">
            <h2>Accuracy and responsibility</h2>
            <p>
              While MealMate aims for speed and accuracy, barcode data, scanned labels, or AI-generated meal cards may
              require user verification. You are responsible for confirming entries before relying on them.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to service</h2>
            <p>Features, pricing, and availability may change over time.</p>
          </section>

          <section className="legal-section">
            <h2>Support</h2>
            <p>For terms questions, visit the Support page.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
