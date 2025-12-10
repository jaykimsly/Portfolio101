import { motion } from 'framer-motion';
import { ExternalLinkIcon, StarIcon } from '@heroicons/react/24/outline';

type Props = {
  project: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    language: string;
    topics: string[];
    updated_at: string;
    stargazers_count: number;
    forks_count: number;
  };
};

export default function GitHubProject({ project }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{project.name}</h4>
        <p className='font-bold text-2xl mt-1'>{project.language}</p>
        <div className='flex space-x-2 my-2'>
          {project.topics?.slice(0, 3).map((topic) => (
            <span key={topic} className='bg-[#f7ab0a]/20 text-[#f7ab0a] px-2 py-1 rounded text-sm'>
              {topic}
            </span>
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>{project.description}</p>
        <div className='flex space-x-4 items-center'>
          <div className='flex items-center space-x-1'>
            <StarIcon className='h-5 w-5' />
            <span>{project.stargazers_count}</span>
          </div>
          <a href={project.html_url} target='_blank' rel='noopener noreferrer' className='flex items-center space-x-1 hover:text-[#f7ab0a]'>
            <ExternalLinkIcon className='h-5 w-5' />
            <span>View Code</span>
          </a>
          {project.homepage && (
            <a href={project.homepage} target='_blank' rel='noopener noreferrer' className='flex items-center space-x-1 hover:text-[#f7ab0a]'>
              <ExternalLinkIcon className='h-5 w-5' />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}