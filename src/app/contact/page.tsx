import React from 'react';
import { Alegreya } from 'next/font/google'
import ContactForm from '@/components/ContactForm'

const alegreya = Alegreya({ subsets: ['latin'] })

export default function Contact() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-baseline mb-8">
          <h1 className="text-8xl font-bold font-ryukosei">Co</h1>
          <h1 className={`${alegreya.className} text-7xl font-bold`}>ntact</h1>
        </div>

        <ContactForm />

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:kineticstorytelling@gmail.com" className="text-blue-500 hover:underline">
                kineticstorytelling@gmail.com
              </a>
            </p>
            <p>
              <strong>Location:</strong> Gyeonggi-do, South Korea
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
