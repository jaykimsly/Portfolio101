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
                src="data:image/jpeg;base64,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"
                alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Grounds Man </h4>
                <p className='font-bold text-2xl mt-1'>Piet Electronics and Repairs</p>
                <div className='flex space-x-2 my-2'>
                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://www.snupit.co.za/content/photos/395776/395776-14c95ac0-beef-4d98-9b2e-1ecba4f5d0ec.jpg"
                        alt="" />

                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://www.snupit.co.za/content/photos/395776/395776-4f7cc327-9fd8-40b5-a36a-f3a1ac1a92f6.jpeg"
                        alt="" />

                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://www.snupit.co.za/content/photos/395776/395776-277eb993-229e-4680-92c6-903bc9bde377.jpeg"
                        alt="" />
                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://www.snupit.co.za/content/photos/395776/395776-c9a08847-a345-44d6-af1d-d8681e4507c7.jpeg"
                        alt="" />
                   

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    01 June 2016 - Current (Part Time)</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>DSTV Installations</li>
                    <li>Hardware Maintainance and Repairs</li>
                    <li>CCTV Installations and Maintanance</li>
                    <li>Electric Fence and Wi-Fi Support</li>
                </ul>
            </div>
        </article>
    )
}