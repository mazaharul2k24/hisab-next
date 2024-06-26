import React from "react";
import Sidebar from "./_components/Sidebar";

import { Ubuntu,Kanit,Space_Grotesk } from "next/font/google";
import Mobilenav from "./_components/Mobilenav";
const UbantuFont=Space_Grotesk({weight:["300",'400'],style:["normal"],subsets:["latin"]})

export default function profileLayout({ children }) {
  return (
      <>
        <div className={UbantuFont.className}>
        <div className="md:flex border-t border-purple-500 gap-4 spacing-7" >
           <div className="shadow-xl md:block hidden bg-gray-800 text-gray-300 font-semibold h-[100vh] ">
           <Sidebar />
           </div>
           <div className="shadow-xl md:hidden bg-gray-800 text-gray-300 font-semibold  ">
           <Mobilenav />
           </div>
           <div className="md:w-[80%]  mx-auto">
           {children}
           </div>
        
        </div>
        </div>
      </>
  );
}
   