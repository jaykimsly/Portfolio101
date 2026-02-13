import { motion } from 'framer-motion';
import { ProjectEntry } from '../data/types';

type Props = {
  project: ProjectEntry;
};

export default function GitHubProject({ project }: Props) {
  return (
    <article role="listitem" className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-surface-card p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{project.name}</h4>
        <p className='font-bold text-2xl mt-1'>{project.language || 'N/A'}</p>
        <div className='flex space-x-2 my-2'>
          {project.topics?.slice(0, 3).map((topic) => (
            <span key={topic} className='bg-brand/20 text-brand px-2 py-1 rounded text-sm'>
              {topic}
            </span>
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>{project.description || 'No description available'}</p>
        <div className='flex space-x-4 items-center'>
          <div className='flex items-center space-x-1'>
            <span className='text-yellow-400'>&#11088;</span>
            <span>{project.stargazers_count}</span>
          </div>
          <a href={project.html_url} target='_blank' rel='noopener noreferrer' className='flex items-center space-x-1 hover:text-brand'>
            <span className='text-blue-400'>&#128279;</span>
            <span>View Code</span>
          </a>
          {project.homepage && (
            <a href={project.homepage} target='_blank' rel='noopener noreferrer' className='flex items-center space-x-1 hover:text-brand'>
              <span className='text-green-400'>&#127760;</span>
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
