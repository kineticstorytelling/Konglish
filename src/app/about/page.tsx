'use client';

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-12">About Me</h1>
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Image section */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/luke-profile.jpg"
              alt="Luke's profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Description section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">Luke Nam</h2>
          <div className="text-lg space-y-4">
            <p>
              Hi! I'm Luke, a passionate language enthusiast and the creator of Konglish. 
              With a background in both Korean and English, I've always been fascinated by 
              the unique way these languages interact in modern Korean culture.
            </p>
            
            <p>
              My journey with Korean language began during my time teaching English in South Korea, 
              where I became deeply immersed in the culture and developed a strong interest in the 
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
