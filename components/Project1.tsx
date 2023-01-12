import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Project({}: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
    items-center justify-center p-20 md:p-44 h-screen '>
      <motion.img
         initial = {{
           opacity:0,
        y:-300}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:1.2}}
         viewport={{once:true}}
          src="https://cdn.discordapp.com/attachments/1009736064367345674/1047069669724520518/image.png"
        alt="" />

     <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
       <h4 className='text-4xl font-semibold text-center'>
         <span className='underline decoration-[#f7ab0a]/50'>
         Sneaker Wear
           </span>{" "}
           Project
       </h4>
       <p className='text-lg text-center md:text-left'>
       Sneaker Wear is a store app for sneakers as a person who want to buy sneakers 
       you may browse for shoe&apos;s here and order them to some of the providers who will
 
       </p>
     </div>
  </div>
  )
}