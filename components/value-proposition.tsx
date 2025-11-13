import React from "react";

export default function ValueProposition() {
    const values = [
      {
        title: "100% AUTHENTIC",
        description: "All products are authentic and original from our partnered suppliers",
        icon: "✓",
      },
      {
        title: "100% FROM JAPAN",
        description: "All items are exported from Japan, straight from the company suppliers",
        icon: "🇯🇵",
      },
      {
        title: "100% TRUSTED",
        description: "We are a trusted shop with 6 years of industry experience",
        icon: "🛡️",
      },
    ]
  
    return (
      <section className="bg-yellow-100 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              We provide and offer the best service for your figure hunting needs
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-yellow-300 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4 tracking-wide">{value.title}</h3>
                <p className="text-black text-sm leading-relaxed font-serif">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  