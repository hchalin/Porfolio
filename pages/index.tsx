import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Head from "next/head";
import Image from "next/image";
import About from "@/Components/About";
import WorkExperience from "@/Components/WorkExperience";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import ContactMe from "@/Components/ContactMe";
import getSocials from "./api/getSocials";

export default function Home() {

  console.log(getSocials())


  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-manditory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#474790]/80">
      <Head>
        <title>Hayden Chalin</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      {/* Header  */}
      <Header />
      {/* snap-...(start, center, end) sets 'snap anchor points' */}
      <section id="hero" className="snap-start scoll-smooth">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center scroll-smooth">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center scroll-smooth">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start scroll-smooth">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start scroll-smooth">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start scroll-smooth">
        <ContactMe />
      </section>
    </div>
  );
}
