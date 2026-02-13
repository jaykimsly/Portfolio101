import { motion } from 'framer-motion'
import React from 'react'
import { portfolioData } from '../data/portfolio';

export default function About() {
    const { personal } = portfolioData;

    return (
        <div className='flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                src={personal.aboutImage}
                alt={`${personal.name} - About photo`}
                className='-mb-20 md:mb-0 flex-shrink-0 rounded-full h-56 w-56 object-cover md:rounded-lg md:h-95 md:w-64
         xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    All About  {" "}
                    <span className='underline decoration-brand uppercase text-red-500'>
                        {personal.name.split(' ')[0]}
                    </span> {" "}
                </h4>
                {personal.bio.map((paragraph, index) => (
                    <p key={index} className='text-sm'>
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    )
}
