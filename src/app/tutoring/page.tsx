import React from 'react'
import { Alegreya } from 'next/font/google'
import Link from 'next/link'

const alegreya = Alegreya({ subsets: ['latin'] })

export default function Tutoring() {
  const services = [
    {
      title: "One-on-One English Lessons",
      description: "Personalized English lessons tailored to your needs and goals. Focus on conversation, grammar, or specific areas you want to improve.",
      price: "₩50,000 / hour",
      features: [
        "Flexible scheduling",
        "Customized lesson plans",
        "Progress tracking",
        "Homework and practice materials"
      ]
    },
    {
      title: "Business English",
      description: "Specialized lessons focusing on professional English skills including email writing, presentations, and business communication.",
      price: "₩60,000 / hour",
      features: [
        "Email writing techniques",
        "Presentation skills",
        "Business vocabulary",
        "Meeting participation practice"
      ]
    },
    {
      title: "TOEIC Preparation",
      description: "Structured lessons to help you achieve your target TOEIC score with proven study strategies and practice tests.",
      price: "₩55,000 / hour",
      features: [
        "Test-taking strategies",
        "Practice tests and reviews",
        "Score improvement tracking",
        "Focused vocabulary building"
      ]
    }
  ]

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline mb-12">
          <h1 className="text-8xl font-bold font-ryukosei">Tu</h1>
          <h1 className={`${alegreya.className} text-7xl font-bold`}>toring</h1>
        </div>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Master English with personalized tutoring services. Whether you're looking to improve your conversation skills,
          prepare for tests, or enhance your business English, we have the right program for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-xl font-semibold text-primary mb-4">{service.price}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl mb-6">Ready to start your English learning journey?</p>
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
