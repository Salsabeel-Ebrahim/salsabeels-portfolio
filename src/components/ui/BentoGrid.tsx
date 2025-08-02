"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState } from "react";
import Lottie from 'react-lottie';
import type { Options } from 'react-lottie';
import animationData from '../../../data/confetti.json'
import MagicButton from './MagicButton';
import { IoCopyOutline } from "react-icons/io5";
import { GiH2O } from "react-icons/gi";
import {GlobeDemo} from './GridGlobe'
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[12rem] md:grid-cols-3 ",
         className,
      )}

    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number
  img?:string,
titleClassName?:string,
imgClassName?:string,
 spareImg?:string,

}) => {
 const [copied , setCopied] = useState(false)
 const handleCopy = ()=>{
  navigator.clipboard.writeText('salsabeelibrahem03@gmail.com')
  setCopied(true)
   setTimeout(() => setCopied(false), 5000); 
 }
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between  space-y-4 rounded-3xl relative border border-white/[0.1]   transition duration-200 hover:shadow-xl  bg-black dark:shadow-none  ",
        className,
      )}
      style={{ background: "rgb(4,7,29)",
       backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0% ,rgba(12,14,35,1) 100%"
      }}
    >
      <div className={` relative ${id=== 6 } && flex justify-center h-full  relative   overflow-hidden`}>
        <div className=" w-full h-full absolute ">
          {  img && 
          <img src={img}
        loading="lazy" 
           className={
            cn(imgClassName,  "h-full  w-full object-cover object-center rounded-3xl" )}/>
}</div>

   <div className= {`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-50'}`}>{
          spareImg &&
           <img src={spareImg} 
          className="object-coverobject-center w-full h-full"/>

        
} </div>
{
  id===2 && 
 
  <GlobeDemo />

  
 
}

{id===6 && 
  <BackgroundGradientAnimation className="rounded-3xl">
           <div className="absolute z-50   rounded-3xl flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
       
         </BackgroundGradientAnimation>}
 
      <div className={`transition w-full duration-200 group-hover/bento:translate-x-2
      relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 ${id===6 ? 'text-center md:text-start items-center justify-center' : '' }`}>
     
        <div className={`font-sans font-bold text-lg z-50 lg:text-3xl w-fit z-10 max-w-96 text-white ${id===6 ? 'text-center md:text-start' : '' } `}>
          {title}
        </div>
        <div className="font-sans text-xs md:text-sm  lg:text-base font-extralight  text-neutral-300">
          {description}
        </div>


{id === 3 && (
  <div className="px-4 absolute right-[15px] bottom-[8%]  lg:bottom-[8%] flex  md:bottom-0 flex-row md:flex-col lg:flex-row  items-start gap-4 lg:gap-2">
    <h2 className=" font-sans text-lg font-bold text-white pt-4">
      Tools I Love Working With
    </h2>
    <div className="flex gap-1 lg:gap-5">
      <div className="flex gap-2 flex-col">
        {["React.js", "Next.js", "TypeScript"].map((item) => (
          <span
            key={item}
            className="py-2 lg:py-3 px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-2 flex-col">
        {["JavaScript", "Tailwind CSS"].map((item) => (
          <span
            key={item}
            className="py-2 lg:py-3 px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
)}

{id===6 && <>
      <div className="mt-5 relative">
        <div className={`absolute -bottom-5 right-0`}>
           <Lottie options={{
              loop: false,
              autoplay: true,
            animationData: animationData,
            rendererSettings : {
              preserveAspectRatio: 'xMidYMid slice'

            }
           }
           
           }  
        height={80}
        width={80} />
        </div>
    

            <MagicButton  
        
            title={copied ? "Email Copied!" : "Copy my email address"}
                icon={
                <IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161A31]" 
                 onClick={handleCopy}
        />
  
      
                   </div>

</>
}

      </div>
</div>
    </div>
  );
};
