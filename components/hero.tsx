"use client"

import React from "react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="bg-yellow-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-20">
          <h1
            className="text-6xl sm:text-7xl font-bold mb-6 tracking-wide text-yellow-500"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}
          >
            YELLOW JACKET TOYS PH
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-black">Certified Kidult!</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="public/products/nendoroid_kafka.png"
                alt="Yellow Jacket Toys collection"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-orange-600 mb-8 tracking-wide">WHAT IS YELLOW JACKET TOYS PH?</h2>
              <p className="text-lg text-black leading-relaxed mb-8 font-serif">ABOUT INFO HERE</p>
              <Link href="/contact" className="inline-block">
                <button className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-full text-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg active:scale-95">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
