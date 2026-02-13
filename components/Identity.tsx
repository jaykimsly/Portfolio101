import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import { portfolioData } from '../data/portfolio';

export default function Identity() {
    const { personal } = portfolioData;

    const [text] = useTypewriter({
        words: personal.typewriterWords,
        loop: true,
        delaySpeed: 2000
    });

    return (
        <div className='h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <Image
                    className='relative rounded-full mx-auto object-cover'
                    src={personal.profileImage}
                    alt={`${personal.name} - ${personal.title}`}
                    width={128}
                    height={128}
                    priority
                />
            </motion.div>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {personal.title}
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>

                <nav className='pt-5 space-x-2' aria-label="Page sections">
                    <Link href="#about" className='identityButton hover:scale-105 transition-transform'>
                        About
                    </Link>
                    <Link href="#experience" className='identityButton hover:scale-105 transition-transform'>
                        Experience
                    </Link>
                    <Link href="#skills" className='identityButton hover:scale-105 transition-transform'>
                        Skills
                    </Link>
                    <Link href="#projects" className='identityButton hover:scale-105 transition-transform'>
                        Projects
                    </Link>
                </nav>
            </div>
        </div>
    );
}
