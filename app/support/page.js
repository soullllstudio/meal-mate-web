import { Suspense } from "react";
import SupportForm from "../components/support-form";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export const metadata = {
  title: "Support",
  description: "Contact MealMate support for app questions and issue reports.",
};

const faqs = [
  {
    q: "How do I report a food entry issue?",
    a: "Use the form below and include a screenshot plus food details so we can help quickly.",
  },
  {
    q: "How do I manage my subscription?",
    a: "Manage, renew, or cancel your plan from your device subscription settings.",
  },
  {
    q: "Can MealMate replace my doctor or dietitian?",
    a: "No. MealMate is informational and should be used alongside professional healthcare guidance.",
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="page-shell legal-shell">
          <h1>Support</h1>
          <p className="last-updated">Need help with MealMate? Send us a message.</p>

          <Suspense fallback={<section className="support-panel">Loading support form...</section>}>
            <SupportForm />
          </Suspense>

          <section className="support-panel">
            <h2>FAQ</h2>
            {faqs.map((faq) => (
              <article key={faq.q} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
