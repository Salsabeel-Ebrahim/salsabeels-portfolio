// "use client";
// import React, { useRef } from "react";
// import {
//   motion,
//   useAnimationFrame,
//   useMotionTemplate,
//   useMotionValue,
// } from "motion/react";
// import { cn } from "@/lib/utils";

// type ButtonProps<T extends React.ElementType> = {
//   as?: T;
//   borderRadius?: string;
//   children: React.ReactNode;
//   containerClassName?: string;
//   borderClassName?: string;
//   duration?: number;
//   className?: string;
// } & React.ComponentPropsWithoutRef<T>;

// export function Button<T extends React.ElementType = "button">({
//   as,
//   borderRadius = "1.75rem",
//   children,
//   containerClassName,
//   borderClassName,
//   duration = 3000,
//   className,
//   ...otherProps
// }: ButtonProps<T>) {
//   const Component = as || "button";

//   return React.createElement(
//     Component,
//     {
//       className: cn(
//         "relative md:col-span-2 overflow-hidden bg-transparent p-[1px] text-xl",
//         containerClassName
//       ),
//       style: { borderRadius },
//       ...otherProps,
//     },
//     <>
//       <div
//         className="absolute inset-0"
//         style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
//       >
//         <MovingBorder duration={duration} rx="30%" ry="30%">
//           <div
//             className={cn(
//               "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
//               borderClassName
//             )}
//           />
//         </MovingBorder>
//       </div>

//       <div
//         className={cn(
//           "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
//           className
//         )}
//         style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
//       >
//         {children}
//       </div>
//     </>
//   );
// }

// const MovingBorder = ({
//   children,
//   duration = 3000,
//   rx,
//   ry,
//   ...otherProps
// }: {
//   children: React.ReactNode;
//   duration?: number;
//   rx?: string;
//   ry?: string;
// } & React.SVGProps<SVGSVGElement>) => {
//   const pathRef = useRef<SVGRectElement | null>(null);
//   const progress = useMotionValue<number>(0);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // useAnimationFrame((time) => {
//   //   const el = pathRef.current;
//   //   if (el && typeof el.getTotalLength === "function") {
//   //     const length = el.getTotalLength();
//   //     const pxPerMillisecond = length / duration;
//   //     const currentLength = (time * pxPerMillisecond) % length;
//   //     progress.set(currentLength);

//   //     const pt = el.getPointAtLength(currentLength);
//   //     x.set(pt.x);
//   //     y.set(pt.y);
//   //   }



//     useAnimationFrame((time) => {
//   const el = pathRef.current;
//   if (!el || typeof el.getTotalLength !== "function") return;

//   const length = el.getTotalLength();
//   const pxPerMillisecond = length / duration;
//   const currentLength = (time * pxPerMillisecond) % length;

//   try {
//     const pt = el.getPointAtLength(currentLength);
//     x.set(pt?.x || 0);
//     y.set(pt?.y || 0);
//   } catch (error) {
//     x.set(0);
//     y.set(0);
//   }
// });

//   }

//   const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

//   return (
//     <>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//         className="absolute h-full w-full"
//         width="100%"
//         height="100%"
//         {...otherProps}
//       >
//         <rect
//           fill="none"
//           width="100%"
//           height="100%"
//           rx={rx}
//           ry={ry}
//           ref={pathRef}
//         />
//       </svg>
//       <motion.div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           display: "inline-block",
//           transform,
//         }}
//       >
//         {children}
//       </motion.div>
//     </>
//   );
// };




"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

type ButtonProps<T extends React.ElementType> = {
  as?: T;
  borderRadius?: string;
  children: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function Button<T extends React.ElementType = "button">({
  as,
  borderRadius = "1.75rem",
  children,
  containerClassName,
  borderClassName,
  duration = 3000,
  className,
  ...otherProps
}: ButtonProps<T>) {
  const Component = as || "button";

  return React.createElement(
    Component,
    {
      className: cn(
        "relative md:col-span-2 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      ),
      style: { borderRadius },
      ...otherProps,
    },
    <>
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </>
  );
}

const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
} & React.SVGProps<SVGSVGElement>) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useAnimationFrame((time) => {
    const el = pathRef.current;
    if (!el || typeof el.getTotalLength !== "function") return;

    try {
      const length = el.getTotalLength();
      const pxPerMillisecond = length / duration;
      const currentLength = (time * pxPerMillisecond) % length;
      const pt = el.getPointAtLength(currentLength);
      x.set(pt?.x || 0);
      y.set(pt?.y || 0);
    } catch (err) {
      // fallback safe values
      x.set(0);
      y.set(0);
    }
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
