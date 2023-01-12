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
                src="https://pkf.co.za/media/fxhpncxq/pkf_xero-logo-colour-square.png"
                alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Server Maintainance</h4>
                <p className='font-bold text-2xl mt-1'>The Digital Academy</p>
                <div className='flex space-x-2 my-2'>
                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://i.scdn.co/image/ab67616d0000b273f0a085529a9643c1e0d48fc1"
                        alt="" />

                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://www.saps.gov.za/newsroom/selthumbnail.php?id=32186"
                        alt="" />

                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://www.smarthomebeginner.com/images/2015/02/best-home-server-software-ft.jpg"
                        alt="" />
                    <motion.img className='h-10 w-10 rounded-full'
                        src="https://www.itrw.net/wp-content/uploads/2016/06/server_spaghetti_4.jpg"
                        alt="" />
                  

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    November 2019 - May 2020</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Server Maintainance</li>
                    <li>Auditing of Server Rooms</li>
                    <li>Repairs and Replacements of Servers, UPS etc</li>

                </ul>
            </div>
        </article>
    )
}