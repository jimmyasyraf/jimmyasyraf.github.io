import Link from "next/link";
import {ChevronRight} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import projects from "@/data/projects.json";
import contributions from "@/data/contributions.json";
import experience from "@/data/experience.json";
import clients from "@/data/clients.json";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const ProjectCard = ({title, description, logo, logoBorder, photo, link}) => (
  <ScrollReveal>
    <Card className='flex flex-col justify-between w-full'>
      <CardHeader>
        <div className="flex flex-row items-center">
          <div>
            <img
              loading="lazy"
              className={`h-10 w-10 rounded-md border-zinc-200 shadow ${logoBorder ? 'border' : ''}`}
              src={logo}
            />
          </div>
          {link ? (
            <Link href={link} className="flex flex-row items-center">
              <h2 className={`ml-2 font-semibold text-base text-teal-600`}>{title}</h2>
              <ChevronRight className='ml-1 w-4 h-4 text-teal-600'/>
            </Link>
          ): (
            <div className="flex flex-row items-center">
              <h2 className={`ml-2 font-semibold text-base text-teal-600`}>{title}</h2>
              <div className="ml-2 border rounded-lg border-neutral-400 p-1">
                <p className="text-xs text-neutral-400 font-semibold">Archived</p>
              </div>
            </div>
          )}
        </div>
        <div>
          <p className="text-sm font-medium">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col">
        <img
          loading="lazy"
          className="w-full rounded-sm"
          src={photo}
        />
      </CardContent>
    </Card>
  </ScrollReveal>
)

const ContributionCard = ({title, description, link}) => (
  <ScrollReveal>
    <Card className='w-full'>
      <CardContent className='p-6 w-full'>
        {link ? (
            <Link href={link} className="flex flex-row items-center">
              <h2 className={`font-semibold text-base text-green-600`}>{title}</h2>
              <ChevronRight className='ml-1 w-4 h-4 text-green-600'/>
            </Link>
        ) : (
          <h2 className={`font-semibold text-base`}>{title}</h2>
        )}
        <span className="text-sm font-medium">{description}</span>
      </CardContent>
    </Card>
  </ScrollReveal>
)

const ExperienceCard = ({company, position, tenure, description}) => (
  <ScrollReveal>
    <Card className='w-full'>
      <CardContent className='p-6'>
        <h2 className={`font-semibold text-base text-violet-600`}>{company}</h2>
        <span className="font-medium text-sm">{tenure}</span>

        <Separator className='my-2'/>

        <h3 className="font-semibold text-base text-violet-600">{position}</h3>
        <p className="mt-2 text-sm font-medium">{description}</p>
      </CardContent>
    </Card>
  </ScrollReveal>
)

const ClientCard = ({title, description, link}) => (
  <ScrollReveal>
    <Card className='w-full'>
      <CardContent className='p-6'>
        {link ? (
            <Link href={link} className="flex flex-row items-center">
              <h2 className={`font-semibold text-base text-orange-600`}>{title}</h2>
              <ChevronRight className='ml-1 w-4 h-4 text-orange-600'/>
            </Link>
        ) : (
          <h2 className={`font-semibold text-base`}>{title}</h2>
        )}
        <span className="text-sm font-medium">{description}</span>
      </CardContent>
    </Card>
  </ScrollReveal>
)

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      <section className="flex flex-col items-center">
        <ScrollReveal>
        <img
          loading="lazy"
          className="h-24 w-24 rounded-xl shadow"
          src="/assets/my-photo.jpg"
        />
        </ScrollReveal>
        <ScrollReveal><h1 className="font-semibold text-xl mt-4 text-center">Hazimi Asyraf</h1></ScrollReveal>
        <ScrollReveal><h1 className={`font-semibold text-3xl mt-2 text-center bg-gradient-to-r from-sky-500 via-violet-600 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text`}>Software Engineer, Robotics Enthusiast</h1></ScrollReveal>
        <ScrollReveal><p className="mt-4 text-base font-medium text-center">I'm a full-stack software engineer based in Ottawa, Canada who enjoys putting things together and make things work. My favorite work lies at the intersection of design and development, creating experiences that look great and performant.</p></ScrollReveal>
        <ScrollReveal><p className="mt-4 text-base font-medium text-center">In the past, I've had the opportunity to develop software across a variety of domains, from financial platforms to geospatial tools. My main tools are Ruby on Rails and React.</p></ScrollReveal>
      </section>

      <section>
        <ScrollReveal>
          <h1 className={`font-semibold text-2xl mt-8 mb-4 text-teal-600`}>Projects</h1>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              logo={project.logo}
              logoBorder={project.logoBorder}
              photo={project.photo}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <section>
        <ScrollReveal>
          <h1 className={`font-semibold text-2xl mt-8 mb-4 text-green-600`}>Open Source Contributions</h1>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {contributions.map((contribution, i) => (
            <ContributionCard
              key={i}
              title={contribution.title}
              description={contribution.description}
              link={contribution.link}
            />
          ))}
        </div>
      </section>

      <section>
        <ScrollReveal>
          <h1 className={`font-semibold text-2xl mt-8 mb-4 text-violet-600`}>Experience</h1>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {experience.map((ex, i) => (
            <ExperienceCard
              key={i}
              company={ex.company}
              position={ex.position}
              tenure={ex.tenure}
              description={ex.description}
            />
          ))}
        </div>
      </section>

      <section>
        <ScrollReveal>
          <h1 className={`font-semibold text-2xl mt-8 mb-4 text-orange-600`}>Clients</h1>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {clients.map((client, i) => (
            <ClientCard
              key={i}
              title={client.title}
              description={client.description}
              link={client.link}
            />
          ))}
        </div>
      </section>

      <section>
        <ScrollReveal>
          <h1 className={`font-semibold text-2xl mt-8 mb-4 text-blue-600`}>Contact</h1>
        </ScrollReveal>

        <ScrollReveal>
          <Card>
            <CardContent className='p-6'>
              <p className="text-base mb-2 font-medium">Want to work together?</p>
              <form action="https://formspree.io/jimmyasyraf@gmail.com" method="POST" className="space-y-4">
                <Input className="focus-visible:ring-blue-600" name="email" type="email" placeholder="Your email" />

                <Textarea name="message" placeholder="Your message" className="focus-visible:ring-blue-600"/>

                <Button type="submit" className='bg-blue-600 hover:bg-blue-500'>Submit</Button>
                <Input type="hidden" name="_next" value="https://hazimiasyraf.com" />
              </form>
            </CardContent>
          </Card>
        </ScrollReveal>

      </section>
    </div>
  );
}
