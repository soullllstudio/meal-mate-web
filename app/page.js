import Link from "next/link";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { HeroPhones } from "./components/phone-showcase";

const featureCards = [
  {
    title: "Scan barcodes instantly",
    description:
      "Use integrated barcode scanning to add verified foods in seconds and keep tracking frictionless.",
  },
  {
    title: "Read nutrition labels fast",
    description:
      "Point your camera at nutrition labels and MealMate converts details into ready-to-log entries.",
  },
  {
    title: "AI meal recognition",
    description:
      "Snap a photo or describe your meal and instantly get structured food cards with calories and macros.",
  },
  {
    title: "Save your personal library",
    description:
      "Build your own food and meal shortcuts for one-tap logging, every day, with no repeated setup.",
  },
];

const goalCards = [
  "Weight loss with controlled calorie targets",
  "Muscle gain with macro-aware planning",
  "Maintenance with balanced, daily intake insights",
];

const valueCards = [
  {
    title: "Fast logging, zero friction",
    description:
      "Capture meals with scan, photo, or text and keep momentum without slowing down your day.",
  },
  {
    title: "Insights that stay practical",
    description:
      "See calories, macros, and trend signals in a format that helps you make better choices quickly.",
  },
  {
    title: "Your routine, your shortcuts",
    description:
      "Save go-to foods and full meals, then log again in one tap whenever they show up in your routine.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <p className="kicker">NUTRITION TRACKING, REINVENTED</p>
              <h1>
                Track calories and macros
                <br />
                at the speed of life.
              </h1>
              <p className="lead">
                MealMate makes calorie and macro tracking simple, fast, and accurate. Scan barcodes, scan nutrition
                labels, snap meals, or describe what you ate to generate instant, ready-to-log food cards.
              </p>
              <div className="cta-row">
                <a href="https://apps.apple.com/app/id6740268220" className="btn btn-solid" target="_blank" rel="noreferrer">
                  Download on the App Store
                </a>
                <Link href="/support" className="btn btn-ghost">
                  Contact Support
                </Link>
              </div>
            </div>
            <HeroPhones />
          </div>
        </section>

        <section className="features">
          <div className="page-shell">
            <p className="section-eyebrow">CORE EXPERIENCE</p>
            <h2>Everything needed for effortless food logging.</h2>
            <div className="feature-grid">
              {featureCards.map((item) => (
                <article key={item.title} className="feature-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="goals">
          <div className="page-shell">
            <div className="goals-panel">
              <p className="section-eyebrow">PERSONALIZED INSIGHTS</p>
              <h2>Built for your goal, not just your food log.</h2>
              <p>
                Whether you&apos;re aiming for weight loss, muscle gain, or balanced maintenance, MealMate translates
                every meal into clear nutrition signals you can actually use.
              </p>
              <ul>
                {goalCards.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="value-stack">
          <div className="page-shell">
            <p className="section-eyebrow">WHY MEALMATE</p>
            <h2>Designed to feel effortless every single day.</h2>
            <div className="value-grid">
              {valueCards.map((item) => (
                <article key={item.title} className="value-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="important-note">
              <h3>Informational use only</h3>
              <p>
                MealMate is not a substitute for professional medical advice. Nutritional recommendations are based on
                standard calculations and support wellness tracking only.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
