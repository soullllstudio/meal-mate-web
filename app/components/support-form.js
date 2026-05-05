"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SupportForm() {
  const params = useSearchParams();
  const [action] = useState("https://formsubmit.co/dadziemikke2@icloud.com");
  const [nextUrl, setNextUrl] = useState("");

  const sent = useMemo(() => params.get("sent") === "1", [params]);

  useEffect(() => {
    setNextUrl(`${window.location.origin}/support?sent=1`);
  }, []);

  return (
    <section className="support-panel">
      <h2>Send a message</h2>
      <p>Share your issue and we will get back to you as soon as possible.</p>
      <form method="POST" className="support-form" action={action}>
        <input type="hidden" name="_subject" value="MealMate Support Request" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={nextUrl} />

        <label htmlFor="full_name">Full name</label>
        <input id="full_name" name="full_name" type="text" required autoComplete="name" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={8} required />

        <button type="submit" className="btn btn-solid support-submit">
          Send message
        </button>
      </form>
      {sent ? <p className="support-success">Thanks. Your message was sent.</p> : null}
    </section>
  );
}
