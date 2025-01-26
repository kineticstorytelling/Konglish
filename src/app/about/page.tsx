'use client';

import React from 'react';
import Image from 'next/image';
import { Alegreya } from 'next/font/google'
const alegreya = Alegreya({ subsets: ['latin'] })

const About: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="flex items-baseline mb-8">
          <h1 className="text-8xl font-bold font-ryukosei">Ab</h1>
          <h1 className={`${alegreya.className} text-7xl font-bold`}>out</h1>
      </div> 
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Image section */}
        <div className="w-full md:w-1/2 relative">
          <div className="w-96 h-96 relative overflow-hidden rounded-full shadow-lg mx-auto">
            <Image
              src="/assets/images/2_Profile_Pic-nobg.png"
              alt="Luke's profile picture"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Description section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">Luke Nam</h2>
          <div className="text-lg space-y-4">
            <p>
              Hi! I'm Luke, an experienced English Teacher and the creator of Konglish. 
              Born and raised in New York, I've always been fascinated by 
              the way the language of my parent's culture interacted with the language of my birth. I am curious as to how these languages interact in modern Korean culture.            </p>
            
            <p>
              Growing up, I've always struggled to communicate with my parents. We somehow developed a strange patois of regionally accented Korean, broken English and modern New Yorker accent. It's beautiful in it's ugliness and I dedicate this site to it. 
              It was when I came to Korea that I became deeply immersed in the culture and developed a strong interest in the 
              phenomenon of Konglish.
            </p>

            <p>
              Through this platform, I aim to help others understand and appreciate the creative 
              and often amusing ways Korean and English blend together, making language learning 
              both fun and accessible.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
