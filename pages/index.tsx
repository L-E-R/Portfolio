import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link';

import { 
  About,
  Contact,
  WorkExperience,
  Header,
  Hero,
  Projects,
  Skills
 } from '../components';

import { HomeIcon } from '@heroicons/react/24/solid';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';

import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export const Home = ({ pageInfo, socials, experiences, skills, projects }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F70AA8]/40">
      <Head>
        <title>{pageInfo.name} Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-center">
        <Contact info={pageInfo}/>
      </section>

      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HomeIcon className="h-10 w-10 rounded-full filter opacity-10 hover:opacity-100 hover:text-[#F70AA8]/40" />
          </div>
        </footer>
      </Link>
     </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return { 
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }
  }
}
