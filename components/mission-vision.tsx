import React from "react";

export default function MissionVision() {
    const sections = [
      {
        title: "MISSION AND VISION",
        cards: [
          {
            title: "100% AUTHENTIC",
            description: "All products are authentic and original from our partnered suppliers",
          },
          {
            title: "100% AUTHENTIC",
            description: "All products are authentic and original from our partnered suppliers",
          },
          {
            title: "100% AUTHENTIC",
            description: "All products are authentic and original from our partnered suppliers",
          },
        ],
      },
      {
        title: "CORE VALUES",
        cards: [
          {
            title: "100% AUTHENTIC",
            description: "All products are authentic and original from our partnered suppliers",
          },
          {
            title: "100% AUTHENTIC",
            description: "All products are authentic and original from our partnered suppliers",
          },
          {
            title: "100% AUTHENTIC",
            description: "All products are authentic and original from our partnered suppliers",
          },
        ],
      },
    ]
  
    return (
      <>
        {sections.map((section) => (
          <section key={section.title} className="bg-yellow-50 px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 text-center">
                <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4 tracking-wide">{section.title}</h2>
                <p className="text-lg text-black font-serif">
                  A shop running for 6 years, providing all your kidult needs
                </p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-yellow-300 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-6xl mb-4 font-bold text-black">✓</div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-4 tracking-wide">{card.title}</h3>
                    <p className="text-black text-sm leading-relaxed font-serif">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </>
    )
  }
  