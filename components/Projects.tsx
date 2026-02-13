import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import GitHubProject from './GitHubProject'
import { portfolioData } from '../data/portfolio';
import { ProjectEntry } from '../data/types';

export default function Projects() {
  const [projects, setProjects] = useState<ProjectEntry[]>(portfolioData.projects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/github-projects');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        if (data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        }
      } catch (err) {
        setError('Using cached projects');
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <motion.div
    initial = {{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      {loading ? (
        <div className='flex items-center justify-center w-full'>
          <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-brand' />
        </div>
      ) : (
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
          {projects.map((project) => (
            <GitHubProject key={project.id} project={project} />
          ))}
        </div>
      )}

      <div className='w-full absolute top-[30%] bg-brand/10 left-0 h-[500px]
      -skew-y-12'></div>
    </motion.div>
  )
}
