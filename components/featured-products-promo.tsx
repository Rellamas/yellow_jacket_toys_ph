import React from "react";
import Link from "next/link"

export default function FeaturedProductsPromo() {
  return (
    <section className="bg-yellow-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <img
              src="/anime-figurines-collection.jpg"
              alt="Featured products showcase"
              className="rounded-lg shadow-lg w-full max-w-sm object-cover"
            />
          </div>

          {/* Right side - Text and Button */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">YELLOW JACKET TOYS PH</h2>
            <p className="text-lg text-black font-serif mb-8">
              Looking for the figures and nendroids you need? Check out our products list!
            </p>
            <div>
              <Link
                href="/products"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-colors"
              >
                PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
