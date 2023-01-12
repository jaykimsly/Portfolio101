import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
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
                src="https://res.cloudinary.com/jaykimsly/image/upload/v1668129061/Portfolio/IMG_20200922_090340_w8hwc3.jpg" alt=""
                className='-mb-20 md:mb-0 flex-shrink-0 rounded-full h-56 w-56 object-cover md:rounded-lg md:h-95 md:w-64
         xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    All About  {" "}
                    <span className='underline decoration-[#f7ab0a] uppercase text-red-500'>Joachim</span> {" "}
                </h4>
                <p className='text-sm'>
                    I am outgoing, dedicated,
                    and open-minded. I get across to people and
                    adjust to changes with ease. I believe that a
                    person should work on developing their professional skills
                    and learning new things all the time. Currently, I am looking for
                    new career opportunities my current job position cannot provide.
                    </p> <p className='text-sm'>
                    as Im a focused dynamic, goal-driven Software and Hardware Engineer experienced in tons
                    of levels of system developing including testing, integration of systems.
                    Seeking to fully utilize and develop for the benefit of the company,
                    as my existing skills will be consequently adding value.

                    </p> <p className='text-sm'>
                    My engineering studies have reinforced my ability to think analytically and creatively.
                    I am highly motivated, and I value honesty, dedication and hard work. I work well in
                    teams and firmly believe in learning through networking and sharing ideas with others. 
                    I have good communication and problem skills and dedicated to streamlining processes 
                    and efficiently resolving project issues.

                </p>
            </div>
        </div>
    )
}