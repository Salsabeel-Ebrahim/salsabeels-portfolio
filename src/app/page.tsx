import Hero from "@/components/Hero/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/ui/Grid";
import Image from "next/image";
import { navItems } from "../../data";
import RecentProjects from "@/components/ui/RecentProjects";
import RelevantExperience from "@/components/RelevantExperience/RelevantExperience";
import Approach from "@/components/Approach/Approach";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
   <main className="relative bg-blackColor flex justify-center items-center flex-col
   overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full space-y-4">
         <FloatingNav navItems={navItems} />
          <Hero/>
          <Grid/>
          <RecentProjects/>
          <RelevantExperience/>
          <Approach/>
          <Footer/>
    </div>
   
     
   
   </main>
  );
}
