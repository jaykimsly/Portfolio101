import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';

type Props = {}

export default function Identitiy({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name is Joachim N Mhlongo",
            // "Eat-Sleep-Code-Repeat",
            "Focused Dynamic, Goal-driven Software and Hardware Engineer",
            "<Wanted To Be A Ninja But Don't Know Ninjutsu />"
        ],
        loop: true,
        delaySpeed: 2000
    });

    return (
        <div className='h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <motion.img className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://res.cloudinary.com/jaykimsly/image/upload/v1668129061/Portfolio/2017-06-19-15-34-49-383_e2hhjo.jpg" alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    full stack developer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='red'></Cursor>
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='identitiyButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='identitiyButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='identitiyButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='identitiyButton'>Projects</button>
                    </Link>




                </div>
            </div>

        </div>
    );
}
