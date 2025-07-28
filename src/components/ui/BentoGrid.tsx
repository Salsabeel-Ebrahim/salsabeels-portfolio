import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";

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
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between  space-y-4 rounded-3xl relative border border-neutral-200 dark:bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] bg-black dark:shadow-none p-0 ",
        className,
      )}
      style={{ background: "rgb(4,7,29)",
       backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0% ,rgba(12,14,35,1) 100%"
      }}
    >
      <div className={` relative ${id=== 6 } && flex justify-center h-full  relative  `}>
        <div className=" w-full h-full absolute ">
          {  img && <img src={img}
            alt={title}
           className={
            cn(imgClassName,  "h-full  w-full object-cover object-center rounded-3xl" )}/>
}</div>
   <div className= {`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-50'}`}>{
          spareImg && <img src={spareImg} 
          className="object-coverobject-center w-full h-full"/>

        
} </div>

{id===6 && 
  <BackgroundGradientAnimation className="rounded-3xl">
           <div className="absolute z-50   rounded-3xl flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
       
         </BackgroundGradientAnimation>}


    
      <div className="transition w-full duration-200 group-hover/bento:translate-x-2
      relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10">
     
        <div className="font-sans font-bold text-lg lg:text-3xl w-fit z-10 max-w-96 text-white ">
          {title}
        </div>
        <div className="font-sans text-xs md:text-sm  lg:text-base font-extralight  text-neutral-300">
          {description}
        </div>
      
      {id=== 3 && <>
               <div className="font-sans text-lg lg:text-3xl w-fit z-10 absolute left-4 font-bold text-white ">
                      My tech <br/> stack
        </div>
           <div className=" flex gap-1 lg:gap-5 w-fit absolute right-[15px] bottom-[8%]">
            <div className="flex  gap-2 flex-col ">
              {['React.js', 'Next.js', 'TypeScript'
              ].map( (item)=>(
                <span key={item} className="py-2 lg:py-3 px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
              )) }
            </div>
            <div className="flex  gap-2 flex-col ">
              {['JavaScript', 'Tailwind CSS', 'TypeScript'
              ].map( (item)=>(
                <span key={item} className="py-2 lg:py-3 px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
              )) }
            </div>

           </div> </>
     }



      </div>
</div>
    </div>
  );
};
