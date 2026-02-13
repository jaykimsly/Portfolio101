import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import ErrorBoundary from "../components/ErrorBoundary";
import LoadingSection from "../components/LoadingSection";
import { portfolioData } from "../data/portfolio";

const Identity = dynamic(() => import("../components/Identity"), {
  ssr: false,
  loading: () => <LoadingSection />,
});
const About = dynamic(() => import("../components/About"), {
  ssr: false,
  loading: () => <LoadingSection />,
});
const Experience = dynamic(() => import("../components/Experience"), {
  ssr: false,
  loading: () => <LoadingSection />,
});
const Skills = dynamic(() => import("../components/Skills"), {
  ssr: false,
  loading: () => <LoadingSection />,
});
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
  loading: () => <LoadingSection />,
});
const ContactMe = dynamic(() => import("../components/ContactMe"), {
  ssr: false,
  loading: () => <LoadingSection />,
});

const { personal } = portfolioData;

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${personal.name} - ${personal.title} | Portfolio`}</title>
        <meta name="description" content={`${personal.name} - ${personal.typewriterWords[1]}`} />
        <meta name="keywords" content="Joachim Mhlongo, Full Stack Developer, Software Engineer, React, Next.js, TypeScript, Portfolio" />
        <meta name="author" content={personal.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content={`${personal.name} - ${personal.title}`} />
        <meta property="og:description" content={personal.typewriterWords[1]} />
        <meta property="og:image" content={personal.ogImage} />
        <meta property="og:url" content={personal.siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personal.name} - ${personal.title}`} />
        <meta name="twitter:description" content={personal.typewriterWords[1]} />
        <meta name="twitter:image" content={personal.ogImage} />

        <link rel="icon" href={personal.profileImage} />
        <link rel="canonical" href={personal.siteUrl} />
      </Head>

      <div className="bg-surface text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth">
        <Header />

        <section id="identity" className="snap-start">
          <ErrorBoundary>
            <Identity />
          </ErrorBoundary>
        </section>

        <section id="about" className="snap-center">
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
        </section>

        <section id="experience" className="snap-center">
          <ErrorBoundary>
            <Experience />
          </ErrorBoundary>
        </section>

        <section id="skills" className="snap-start">
          <ErrorBoundary>
            <Skills />
          </ErrorBoundary>
        </section>

        <section id="projects" className="snap-start">
          <ErrorBoundary>
            <Projects />
          </ErrorBoundary>
        </section>

        <section id="contact" className="snap-start">
          <ErrorBoundary>
            <ContactMe />
          </ErrorBoundary>
        </section>

        <Link href='#identity' aria-label="Back to top">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex justify-center">
              <motion.img
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 transition-all duration-300"
                src={personal.profileImage}
                alt="Back to top"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}
