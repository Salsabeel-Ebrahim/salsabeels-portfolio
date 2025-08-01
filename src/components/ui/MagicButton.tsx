
import React from 'react'
import toast from 'react-hot-toast';

export default function MagicButton({title , icon , position ,  onClick , otherClasses} : 
    {title:string , icon: React.ReactNode , position:string , onClick?: ()=>void , otherClasses?:string }) {
 
    return (
    <>
    <button className=" relative inline-flex h-12 overflow-hidden rounded-lg
    
     p-[1px] focus:outline-none w-fit "
     onClick={onClick}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer gap-2 items-center justify-center rounded-lg bg-slate-950  px-2 py-1 text-sm font-medium text-white backdrop-blur-3xl">
   { position==='left' && icon}
    {title}
    { position ==='right' && icon}
  </span>
</button>
    
    </>
  )
}
