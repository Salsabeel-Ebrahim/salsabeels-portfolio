import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class", 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
     colors: {
    blackColor: "#000319",  
}

    },
  },
  plugins: [],
};

export default config;
