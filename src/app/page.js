import Link from "next/link";
import projects from "@/data/projects.json";
import contributions from "@/data/contributions.json";
import experience from "@/data/experience.json";
import clients from "@/data/clients.json";
import { AsciiPortrait } from "@/components/ui/ascii-portrait";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const SectionHeading = ({ title }) => (
  <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-10">{title}</h2>
);

const HoverCaret = () => (
  <span aria-hidden="true" className="absolute -left-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
);

const ProjectRow = ({ title, description, link }) => {
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="relative text-[15px] font-medium text-black">
          <HoverCaret />
          {title}
          {link && (
            <span aria-hidden="true" className="inline-block text-neutral-400 group-hover:text-black transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"> ↗</span>
          )}
        </h3>
        {!link && (
          <span className="font-mono text-xs text-neutral-400 border border-neutral-300 px-2 py-0.5 shrink-0">archived</span>
        )}
      </div>
      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{description}</p>
    </>
  );

  return link ? (
    <Link href={link} className="group block border-t border-neutral-200 py-6">
      {inner}
    </Link>
  ) : (
    <div className="group border-t border-neutral-200 py-6">{inner}</div>
  );
};

const ExperienceRow = ({ company, position, tenure, description }) => (
  <div className="border-t border-neutral-200 py-6 grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-2 sm:gap-8">
    <span className="font-mono text-xs text-neutral-400 sm:pt-1">{tenure}</span>
    <div>
      <h3 className="text-[15px] font-medium text-black">{company}</h3>
      <p className="mt-1 text-xs text-neutral-400">{position}</p>
      <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6">
      <section className="pt-14 flex flex-col items-center">
        <div className="anim-materialize">
          <AsciiPortrait />
        </div>

        <div className="w-full mt-10">
          <h1 className="anim-rise anim-delay-1 text-2xl sm:text-3xl text-black font-semibold tracking-tight">Hazimi Asyraf</h1>
          <p className="anim-rise anim-delay-2 mt-3 font-mono text-xs uppercase tracking-widest text-neutral-500">
            software engineer · robotics enthusiast
          </p>

          <div className="anim-rise anim-delay-3">
            <p className="mt-10 text-[15px] leading-relaxed">
              I&apos;m a full-stack software engineer based in Ottawa, Canada who enjoys
              putting things together and making things work. My favorite work lies at
              the intersection of design and development, creating experiences that
              look great and stay performant.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed">
              In the past, I&apos;ve had the opportunity to develop software across a
              variety of domains, from financial platforms to geospatial tools. My
              main tools are Ruby on Rails and React.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <ScrollReveal>
          <SectionHeading title="projects" />
          <div>
            {projects.map((project, i) => (
              <ProjectRow
                key={i}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-24">
        <ScrollReveal>
          <SectionHeading title="open source" />
          <div>
            {contributions.map((contribution, i) => (
              <ProjectRow
                key={i}
                title={contribution.title}
                description={contribution.description}
                link={contribution.link}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-24">
        <ScrollReveal>
          <SectionHeading title="experience" />
          <div>
            {experience.map((ex, i) => (
              <ExperienceRow
                key={i}
                company={ex.company}
                position={ex.position}
                tenure={ex.tenure}
                description={ex.description}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-24">
        <ScrollReveal>
          <SectionHeading title="clients" />
          <div>
            {clients.map((client, i) => (
              <ProjectRow
                key={i}
                title={client.title}
                description={client.description}
                link={client.link}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-24">
        <ScrollReveal>
          <SectionHeading title="contact" />
          <p className="text-sm text-neutral-500 mb-6">Want to work together? Drop me a line.</p>
          <form action="https://formspree.io/jimmyasyraf@gmail.com" method="POST" className="space-y-4">
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-transparent border border-neutral-300 px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your message"
              className="w-full bg-transparent border border-neutral-300 px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none resize-y transition-colors"
            />
            <button
              type="submit"
              className="border border-neutral-400 px-6 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
            >
              Send
            </button>
            <input type="hidden" name="_next" value="https://hazimiasyraf.com" />
          </form>
        </ScrollReveal>
      </section>
    </main>
  );
}
