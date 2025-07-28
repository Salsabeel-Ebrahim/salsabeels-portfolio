"use client";

import { Spotlight } from '../ui/Spotlight'
import { cn } from '@/lib/utils'
import Link from 'next/link';
import { TextGenerateEffect } from './../ui/TextGenerateEffect';
import MagicButton from '../ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { socialMedia } from '../../../data';




export default function Hero() {
//   const copyEmailToClipboard = () => {
//    const email = "salsabeelibrahem03@gmail.com";
//    navigator.clipboard.writeText(email).then(
//     ()=>{toast.success("Email copied!");}
//    ).catch((err) => {
//       console.error("Failed to copy!", err);
//     });
//  }
 
  return (
    <>
  <div className=" "> 
    {/* pt-36 pb-20  */}
    <div className="">
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
        fill='white'/>

        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]'
        fill='purple'/>

        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]'
        fill='blue'/>  </div>

        <div className="">

 <div className="flex h-screen w-full items-center justify-center 
  bg-blackColor dark:bg-white relative">

      <div
  className={cn(
    "absolute inset-0",
    "[background-size:80px_80px]",
    "[background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)]",
    "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)]",
  )}
/>

      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex 
      items-center justify-center bg-blackColor [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-white"></div>
    
   
   
   
   <div className="flex  justify-center items-center my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl 
      lg:max-w-[60vw] flex flex-col justify-center items-center">
        <h2 className='uppercase tracking-widest text-xs text-center
        text-blue-100 max-w-80'>
          Dynamic Web Magic With Next.js
        </h2>
        <TextGenerateEffect className='text-center text-[40px] md:text-5xl
        lg:text-6xl'
         words='Build your fast, modern web interfaces with React & Next.js'/>
         <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Hi, I&apos;m Salsabeel Ebrahim, a Front End developer</p>

    
    <Link href={ `${socialMedia[0].href  }`}>
                 <MagicButton title={" show my work"} icon={ <FaLocationArrow/> 
      }   
     position='right'/>
                </Link>
    
        
      
      </div>
   </div>
    </div>
 

        </div>

         

      
  </div>
   </>
  )
}


