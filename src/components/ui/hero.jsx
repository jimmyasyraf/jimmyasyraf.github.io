"use client";

import { useCallback, useState } from "react";
import { AsciiPortrait } from "./ascii-portrait";

export function Hero() {
  const [decoded, setDecoded] = useState(false);
  const handleDecoded = useCallback(() => setDecoded(true), []);

  const reveal = (extra) =>
    `hero-reveal transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${extra} ${
      decoded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
    }`;

  return (
    <section className="pt-14 flex flex-col items-center">
      <noscript>
        <style>{`.hero-reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>

      <AsciiPortrait onDecoded={handleDecoded} />

      <div className="w-full mt-10">
        <h1 className={reveal("delay-0") + " text-2xl sm:text-3xl text-black dark:text-white font-semibold tracking-tight"}>
          Hazimi Asyraf
        </h1>
        <p className={reveal("delay-150") + " mt-3 font-mono text-xs uppercase tracking-widest text-neutral-500"}>
          software engineer · robotics enthusiast
        </p>

        <div className={reveal("delay-300")}>
          <p className="mt-10 text-[15px] leading-relaxed">
            I&apos;m a full-stack software engineer based in Ottawa, Canada who enjoys
            putting things together and making things work. Much of my work
            lies at the intersection of design and development, creating
            experiences that look great and stay performant.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            In the past, I&apos;ve had the opportunity to develop software across a
            variety of domains, from financial platforms to geospatial tools. My
            main tools are Ruby on Rails and React.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            I&apos;m passionate about robots. My free time goes into building
            them: the electronics, the mechanics, and the software that ties it
            all together. I have a soft spot for problems with hardware in the
            loop.
          </p>
        </div>
      </div>
    </section>
  );
}
