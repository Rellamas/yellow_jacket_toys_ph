import React from 'react';

export default function About() {
    return (
      <section id="about" className="bg-yellow-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img
                src="public/images/logo.png"
                alt="Yellow Jacket Toys branding"
                className="h-full w-full object-cover"
              />
            </div>
  
            {/* Text content */}
            <div>
              <h2 className="mb-4 text-5xl sm:text-6xl font-bold text-black tracking-wide">ABOUT US</h2>
              <p className="mb-6 text-black leading-relaxed font-serif text-lg">
                A shop running for 6 years, providing all your kidult needs
              </p>
              <p className="text-black leading-relaxed font-serif">ABOUT INFO HERE</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  