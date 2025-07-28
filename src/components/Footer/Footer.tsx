import React from 'react'
import MagicButton from '../ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'
import { div } from 'motion/react-client'
import { socialMedia } from '../../../data'

export default function Footer() {
  return (
    <>
    <footer className='w-full pt-20 pb-10 ' id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img src="/footer-grid.svg" alt="grid" 
            loading="lazy" className='w-full h-full opacity-75'/>
        </div>

            <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[60vw] text-3xl md:text-5xl font-bold text-center">
          Ready to take <span className="text-purple-300">your</span> thoughts to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center font-semibold text-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
         <Link href="mailto:salsabeelibrahem03@gmail.com" className='md:mt-10'>
          <MagicButton
          title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"/>
        </Link>
        </div>

         <div className="flex mt-16 md:flex-row flex-col gap-4 md:gap-0 justify-between items-center">
        <p className="text-center md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 <span className='text-purple-300'>Salsabeel Ebrahim</span>
        </p>

        <div className="flex items-center gap-6 md:gap-3">
            {socialMedia.map((profile)=>(
                <div key={profile.id}
                className='w-10 h-10 cursor-pointer flex justify-center
                items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
            
                <Link href={ `${profile.href}`}>
                 <img src={profile.img} alt="socialMedia" 
                height={20} width={20}/>
                </Link>
               
           
                </div>
            ))}
        </div>
        </div>

       
        

    </footer>
    </>
  )
}
