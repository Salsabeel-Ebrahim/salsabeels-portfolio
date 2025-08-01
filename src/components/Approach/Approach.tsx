"use client";
 import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
export default function Approach() {
  return (



    <section className="py-20 w-full" id="Approach">
         <h1 className='heading text-center  text-3xl md:text-5xl mb-4 font-bold leading-snug md:leading-tight'>My
            <span className='text-violet-400'> approach</span>
        </h1>

      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center  gap-4 ">
        <Card
         title="Planning & Strategy" 
         icon={<AceternityIcon order="Phase 1 " />} 
      
         description= "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card 
        title="Development & Progress Update" 
        icon={<AceternityIcon order="Phase 2" />}
        description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],  ]}
            dotSize={2}
          />
    
        </Card>
        <Card
         title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          description="This is where the magic happens! Based on the approved design, I translate everything into functional, responsive code and build your website from the ground up using tools like Git for version control and frameworks such as Next.js and React." >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {

const [active, setActive] = React.useState(false);

  return (
    <div
     
        onMouseEnter={() => setActive(true)}
  onMouseLeave={() => setActive(false)}
  onFocus={() => setActive(true)}
  onBlur={() => setActive(false)}
  tabIndex={0}
      className="
      border  group/canvas-card flex items-center justify-center  border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[25rem] lg:h-[30rem] relative rounded-xl 
      
 "
 
 

    >
<Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
<Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
<Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
<Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />


      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
        <div className="absolute top-[50%] left-[50%] -translate-[50%]
        text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center  ">
          {icon}
        </div>
        <h2 className="text-2xl  md:text-3xl opacity-0 text-center group-hover/canvas-card:opacity-100 focus-within:opacity-100

 
 relative z-10 dark:text-black text-white  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className=" text-sm opacity-0 text-center group-hover/canvas-card:opacity-100 focus-within:opacity-100

 
 relative z-10 dark:text-black text-white  mt-4  font-semibold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order:string}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2  lg:text-3xl font-bold text-purple-300 backdrop-blur-3xl">
    {order}
  </span>
</button>
  );
};

export const Icon = ({ className, ...rest }:React.SVGProps<SVGSVGElement>) => {
  return (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
