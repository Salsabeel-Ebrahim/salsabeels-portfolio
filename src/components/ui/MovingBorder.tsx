"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

// ✅ Generic Button component
type ButtonProps<T extends React.ElementType> = {
  as?: T;
  borderRadius?: string;
  children: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & React.ComponentPropsWithRef<T>;

export function Button<T extends React.ElementType = "button">({
  as,
  borderRadius = "1.75rem",
  children,
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={cn(
        "relative md:col-span-2 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      {children}
    </Component>
  );
}



