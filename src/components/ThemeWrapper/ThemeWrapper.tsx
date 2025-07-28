
// "use client";


// import { ThemeProvider } from './../../lib/Theme/theme-provider';

// export function ThemeWrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="dark"
//       enableSystem
//       disableTransitionOnChange
//     >
//       {children}
//     </ThemeProvider>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // ⛔ لمنع ظهور فلاش أبيض واختلاف السيرفر
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
