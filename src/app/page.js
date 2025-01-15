import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import {SquareArrowOutUpRight} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import projects from "@/data/projects.json";
import archivedProjects from "@/data/archivedProjects.json";
import contributions from "@/data/contributions.json";
import experience from "@/data/experience.json";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

const ProjectCard = ({title, description, logo, photo, imageWidth, imageHeight, link}) => (
  <Card className='flex flex-col justify-between'>
    <CardHeader>
      <div className="flex flex-row w-full items-center">
        <div>
          <Image
            className="rounded-md border border-zinc-200"
            src={logo}
            alt={title}
            width={40}
            height={40}
          />
        </div>
        <h2 className={`ml-4 font-semibold text-base`}>{title}</h2>
        {link && (
          <Link href={link}>
            <SquareArrowOutUpRight className='ml-2 w-4 h-4 text-gray-400'/>
          </Link>
        )}
      </div>
      <div>
        <p className="text-sm font-normal text-gray-700">{description}</p>
      </div>
    </CardHeader>
    <CardContent className="flex flex-col">
      <Image
        src={photo}
        alt={title}
        width={imageWidth}
        height={imageHeight}
      />
    </CardContent>
  </Card>
)

const ContributionCard = ({title, description, link}) => (
  <Card>
    <CardContent className='p-6'>
      <div className="flex flex-row items-center">
      <h2 className={`font-semibold text-base`}>{title}</h2>
      {link && (
        <Link href={link}>
          <SquareArrowOutUpRight className='ml-2 w-4 h-4 text-gray-400'/>
        </Link>
      )}
      </div>
      <span className="text-sm font-normal text-gray-700">{description}</span>
    </CardContent>
  </Card>
)

const ExperienceCard = ({company, position, tenure, description}) => (
  <Card>
    <CardContent className='p-6'>
      <h2 className={`font-semibold text-base`}>{company}</h2>
      <span className="font-normal text-gray-700 text-sm">{tenure}</span>

      <Separator className='my-2'/>

      <h3 className="font-semibold text-base">{position}</h3>
      <p className="mt-2 text-sm font-normal text-gray-700">{description}</p>
    </CardContent>
  </Card>
)

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      <Image
        className="rounded-xl"
        src="/assets/my-photo.jpg"
        alt="Hazimi Asyraf"
        width={100}
        height={100}
      />
      <h1 className={`${spaceGrotesk.className} font-semibold text-3xl mt-4`}>Software Engineer, Robotics Enthusiast</h1>
      <p className="text-gray-700 mt-4 text-base">I'm a full-stack software engineer based in Ottawa, Canada who enjoys putting things together and make things work. My favorite work lies at the intersection of design and development, creating experiences that look great and performant.</p>
      <p className="text-gray-700 mt-4 text-base">In the past, I've had the opportunity to develop software across a variety of domains, from financial platforms to geospatial tools. My main tools are Ruby on Rails and React.</p>

      <section>
        <h1 className={`font-semibold text-2xl mt-8 mb-4`}>Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              logo={project.logo}
              photo={project.photo}
              imageWidth={project.imageWidth}
              imageHeight={project.imageHeight}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <section>
        <h1 className={`font-semibold text-2xl mt-8 mb-4`}>Archived Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {archivedProjects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              logo={project.logo}
              photo={project.photo}
              imageWidth={project.imageWidth}
              imageHeight={project.imageHeight}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <section>
        <h1 className={`font-semibold text-2xl mt-8 mb-4`}>Open Source Contributions</h1>
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
        <h1 className={`font-semibold text-2xl mt-8 mb-4`}>Experience</h1>
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
        <h1 className={`font-semibold text-2xl mt-8 mb-4`}>Contact</h1>
        <p className="text-gray-700 text-base mb-2">Want to work together?</p>
        <form action="https://formspree.io/jimmyasyraf@gmail.com" method="POST" className="space-y-4">
          <Input name="email" type="email" placeholder="Your email" />

          <Textarea name="message" placeholder="Your message" />

          <Button type="submit">Submit</Button>
          <Input type="hidden" name="_next" value="https://hazimiasyraf.com" />
        </form>
      </section>
    </div>
  );
}
