import React from 'react'
import { Button } from '../ui/MovingBorder'
import { relevantExperience } from '../../../data'

export default function RelevantExperience() {
  return (
    <>
     <div className='' id='RelevantExperience'>
            <h1 className='heading text-center  text-3xl md:text-5xl mb-4 font-bold leading-snug md:leading-tight'>Relevant 
                <span className='text-violet-400'> Experience</span>
            </h1>

<div className="w-full grid mt-12 grid-cols-1 lg:grid-cols-4 gap-10">


    {
      relevantExperience.map(item => (
          <Button key={item.id}>
      <div className="flex lg:flex-row lg:items-center flex-col p-3 py-6 lg:p-10 gap-3 " >
        <img   src={item.thumbnail} alt={item.title}
         loading='lazy' className='w-16 md:w-20 lg:w-32'/>


        <div className="lg:ms-5">
          <h1 className='text-start text-xl md:text-2xl font-bold'>{item.title}</h1>
          <p className='text-start text-white-100 mt-3 font-semibold'>{item.desc}</p>
       
        </div>
      </div>
       </Button>

      ))
    }
    

</div>
            </div>
  </>
  )
}
