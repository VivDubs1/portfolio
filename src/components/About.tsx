"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";
import { Heading } from "./Heading";

export default function About() {
  return (
    <div>
  
      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          I make. I think. I move fast.

          <br></br><br></br>One week I’m deep in spreadsheets, breaking down ₹190 Cr energy deals. Next, I’m designing systems, pitching to brands, or mapping user flows like puzzles.

          <br></br><br></br>Engineering brain. Business instinct. Product heart.

          <br></br><br></br>If it builds, ships, or scales - I’m there.

        <br></br><br></br>Ideas are everywhere. I just don’t wait on them.

        <br></br><br></br>Vivin Dube. Playin it live.
        </Paragraph>
      </div>
    {/* Testimonials Section */}
     <br></br><br></br>
      <Heading className="font-black">Testimonials</Heading>
      <div className="bg-white rounded-lg shadow-md p-6 mb-10 max-w-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className=" mt-4">&quot;I was thoroughly impressed by Vivin Dube’s eagerness to learn and natural curiosity throughout his internship. He consistently asked thoughtful questions, sought to understand the deeper &quot;why&quot; behind tasks, and showed a genuine interest in expanding his knowledge beyond the immediate scope of work.

                                                    <br></br><br></br>Vivin approached every learning opportunity with enthusiasm and an open mind, quickly picking up new concepts and applying them effectively. I am confident that this mindset will serve him extremely well moving forward.&quot;</p>
            <p className="text-gray-500">— Saurodeep Chatterjee, Senior Manager at Tata Capital</p>
          </div>
          <a href="https://www.linkedin.com/in/vivin-dube-65a778280/" className="ml-4 text-blue-500 hover:text-blue-700 flex items-center" title="See all testimonials">
            <span className="mr-1">See rec</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>  
    </div>
  );
}
