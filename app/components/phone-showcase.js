 "use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const heroScreens = [
  "/assets/CACD5328-7316-4208-A91D-FBFFF3EA984C.png",
  "/assets/435E5B87-2170-45E9-9DD6-A61601AC859D.png",
  "/assets/3845625D-C991-4FA5-9496-9DAD62905BE0.png",
  "/assets/1F607E64-5349-4F96-95EB-63A87EAEC592.png",
  "/assets/32EC96D2-7200-4A18-A5C9-A4582F450DD6.png",
];

function IPhoneFrame({ src, alt, priority = false }) {
  return (
    <figure className="iphone-shell">
      <Image src={src} alt={alt} width={420} height={900} priority={priority} />
    </figure>
  );
}

export function HeroPhones() {
  const shellRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!shellRef.current) return;
      const rect = shellRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = -rect.height * 0.2;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const eased = useMemo(() => 1 - (1 - progress) * (1 - progress), [progress]);
  const phoneConfigs = [
    { src: heroScreens[1], alt: "MealMate barcode scanner", delay: 0 },
    { src: heroScreens[0], alt: "MealMate daily nutrition dashboard", delay: 0.08 },
    { src: heroScreens[2], alt: "MealMate AI meal recognition card", delay: 0.16 },
    { src: heroScreens[3], alt: "MealMate food log screenshot", delay: 0.24 },
    { src: heroScreens[4], alt: "MealMate macro summary screenshot", delay: 0.32 },
  ];

  return (
    <div ref={shellRef} className="hero-phones" aria-hidden="true">
      <div className="phone-row">
        {phoneConfigs.map((phone, index) => {
          const local = Math.max(0, Math.min(1, (eased - phone.delay) / (1 - phone.delay)));
          const y = (1 - local) * (140 + index * 22);
          const scale = 0.92 + local * 0.08;

          return (
            <div
              key={phone.src}
              className="phone-slot"
              style={{
                transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
              }}
            >
              <IPhoneFrame src={phone.src} alt={phone.alt} priority={index === 0} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
