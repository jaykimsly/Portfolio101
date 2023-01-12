import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                            w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#54515129] p-10 hover:opacity-100
                            opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200]
                            object-cover object-center'
                src="https://res.cloudinary.com/jaykimsly/image/upload/v1668129061/Portfolio/IMG_20200703_134235_zfhfde.jpg"
                alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Full-Stack Developer</h4>
                <p className='font-bold text-2xl mt-1'>The Digital Academy</p>
                <div className='flex space-x-2 my-2'>
                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor"
                        alt="" />

                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128&color=currentColor"
                        alt="" />

                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://icongr.am/devicon/nodejs-original-wordmark.svg?size=128&color=currentColor"
                        alt="" />
                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://icongr.am/devicon/postgresql-original-wordmark.svg?size=128&color=currentColor"
                        alt="" />
                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://icongr.am/devicon/git-original-wordmark.svg?size=128&color=currentColor"
                        alt="" />
                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://icongr.am/devicon/gitlab-original-wordmark.svg?size=128&color=currentColor"
                        alt="" />
                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://icongr.am/devicon/typescript-plain.svg?size=128&color=currentColor"
                        alt="" />

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    01 June 2022 - Current</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Creatinng applications</li>
                    <li>Mean Stack Developer</li>
                    <li>Pean Stack Developer</li>

                </ul>
            </div>
        </article>
    )
}