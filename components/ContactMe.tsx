import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { portfolioData } from '../data/portfolio';
import { ContactFormData } from '../data/types';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactMe() {
    const { personal } = portfolioData;
    const [status, setStatus] = useState<FormStatus>('idle');

    const { register, handleSubmit, reset } = useForm<ContactFormData>();

    const onSubmit: SubmitHandler<ContactFormData> = async (formData) => {
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error('Failed to send');
            setStatus('sent');
            reset();
            setTimeout(() => setStatus('idle'), 4000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
                        max-w-7xl px-10 justify-evenly items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font font-semibold text-center'>
                    Need a developer? Let&apos;s talk.{" "}
                    <span className='decoration-brand/50 underline'>Hire Me.</span>
                </h4>

                <div className='space-y-10 '>
                    <div className='flex items-center space-x-5 justify-center'>
                        <span className='text-brand text-2xl'>&#128241;</span>
                        <p className='text-2xl'>{personal.phone}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <span className='text-brand text-2xl'>&#9993;&#65039;</span>
                        <p className='text-2xl'>{personal.email.toUpperCase()}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <span className='text-brand text-2xl'>&#128205;</span>
                        <p className='text-lg md:text-2xl'>{personal.location}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input
                            {...register('name', { required: true })}
                            placeholder='Name'
                            className='contactInput'
                            type="text"
                            aria-label="Your name"
                        />
                        <input
                            {...register('email', { required: true })}
                            placeholder='Email'
                            className='contactInput'
                            type="email"
                            aria-label="Your email"
                        />
                    </div>
                    <input
                        {...register('subject', { required: true })}
                        placeholder='Subject'
                        className='contactInput'
                        type="text"
                        aria-label="Subject"
                    />
                    <textarea
                        {...register('message', { required: true })}
                        placeholder='Message'
                        className='contactInput'
                        aria-label="Message"
                    ></textarea>
                    <button
                        type='submit'
                        disabled={status === 'sending'}
                        className='bg-brand py-5 px-10 rounded-md text-black font-bold text-lg disabled:opacity-50 transition-opacity'
                    >
                        {status === 'sending' ? 'Sending...' :
                         status === 'sent' ? 'Message Sent!' :
                         status === 'error' ? 'Failed - Try Again' :
                         'Submit'}
                    </button>
                </form>
            </div>
        </div>
    )
}
