import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export const metadata = {
  title: "Privacy Policy",
  description: "MealMate privacy policy details data handling, permissions, and user choices.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="page-shell legal-shell">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: May 5, 2026</p>

          <section className="legal-section">
            <p>
              MealMate is designed to help you track nutrition simply and accurately. We focus on practical features
              while keeping data handling clear and privacy-conscious.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data you provide in the app</h2>
            <p>
              Meal logs, custom foods, recipes, and saved meals you create may be stored to provide tracking history,
              insights, and one-tap logging workflows.
            </p>
          </section>

          <section className="legal-section">
            <h2>Camera and scan features</h2>
            <p>
              If you use barcode scanning, nutrition label scanning, or AI meal recognition by photo, camera input is
              processed to generate food entries and nutrition details.
            </p>
          </section>

          <section className="legal-section">
            <h2>Meal descriptions</h2>
            <p>
              If you describe a meal in text, that content is used to generate ready-to-log food cards and improve the
              speed and relevance of your logging flow.
            </p>
          </section>

          <section className="legal-section">
            <h2>Purpose limitation</h2>
            <p>
              MealMate is provided for informational purposes only and does not provide medical diagnosis or treatment.
              Nutritional guidance is based on standard calculations.
            </p>
          </section>

          <section className="legal-section">
            <h2>Platform billing terms</h2>
            <p>Subscription purchases and renewals are managed by your app marketplace account settings.</p>
          </section>

          <section className="legal-section">
            <h2>Contact</h2>
            <p>For privacy questions, use the Support page.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
