import React from 'react'
import { projects } from '../../../data'
import { div } from 'motion/react-client'
import { PinContainer } from './3dPin';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';

export default function RecentProjects() {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading text-center  text-3xl md:text-5xl mb-4 font-bold leading-snug md:leading-tight'>A selection of {' '}
            <span className='text-violet-400'>recent projects</span>
        </h1>
        {/* <div className='grid gap-x-8 justify-center items-center flex-wrap 
         overflow-hidden gap-y-1 md:gap-y-1 lg:gap-y-20 bg-red-500 grid-cols-1 md:grid-cols-2  p-4 lg:mt-10'>
            { projects.map(
                ({id, title , des , img , iconLists, link})=>(
                         <div key={id} className='col-span-1 w-full  relative my-3 min-h-[340px] pb-8 '>

                            <PinContainer className=' w-full '>
                              <Link href={link}>
                                <div className=" w-full">
                                 <img src={img} className='w-full object-contain'/>

                        <div className="space-y-4 my-3">
                              <h2  className='text-bold text-xl md:text-2xl  line-clamp-1 '>{title}</h2>
                              <p  className='lg:text-xl font-light text-sm line-clamp-2 lg:font-normal text-purple-100'>{des}</p>

                             <div className="flex  items-center ">
                                  <p className='flex lg:text-xl md:text-xs text-sm  text-purple-300'>Check Live Site</p>
                                    
                                      <FaLocationArrow className="ms-3 text-purple-300"  /> 
                                 
                                 </div>
                                        </div> 
                                   
                                </div>
                             </Link>
                            </PinContainer>
                           
                         </div>
                )
               
          )
        }</div> */}

        <div className="grid 
  grid-cols-1 
  md:grid-cols-2 gap-y-1
 sm:gap-y-4 md:gap-y-6 gap-x-4 md:gap-x-6 lg:gap-x-16 lg:gap-y-20

  p-4 
  lg:mt-10">

  {projects.map(({ id, title, des, img, iconLists, link }) => (
    <div
      key={id}
      className="col-span-1  w-full relative md:my-3 min-h-[320px] md:pb-4"
    >
      <PinContainer className="w-full ">
        <Link href={link}>
          <div className="w-full">
            <img src={img} className="w-full object-contain" />

            <div className="space-y-4 my-3">
              <h2 className="font-bold text-xl md:text-2xl line-clamp-1">
                {title}
              </h2>

              <p className="lg:text-xl font-light text-sm line-clamp-2 lg:font-normal text-purple-100">
                {des}
              </p>

              <div className="flex items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3 text-purple-300" />
              </div>
            </div>
          </div>
        </Link>
      </PinContainer>
    </div>
  ))}
</div>

    </div>
  )
}
