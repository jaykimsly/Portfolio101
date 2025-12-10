import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import GitHubProject from './GitHubProject'
import { fetchGithubProjects } from '../utils/fetchGithubProjects'

type Props = {}

export default function Projects({ }: Props) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const githubProjects = await fetchGithubProjects();
        setProjects(githubProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
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
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
    snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#f7ab0a]/80'>
        {loading ? (
          <div className='flex items-center justify-center w-full'>
            <p className='text-gray-500'>Loading projects...</p>
          </div>
        ) : (
          projects.map((project: any) => (
            <GitHubProject key={project.id} project={project} />
          ))
        )}
      </div>
      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] 
      -skew-y-12'></div>
    </motion.div>
  )
}