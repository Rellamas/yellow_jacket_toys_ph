"use client"
import React from "react";

export default function ProductModal({ product, onClose }: any) {
  if (!product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-yellow-300 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-700 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product image */}
        <div className="mb-6 h-64 overflow-hidden rounded-lg bg-gray-100">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
        </div>

        {/* Product details */}
        <h2 className="mb-2 text-3xl font-bold text-black font-serif">{product.name}</h2>
        <p className="mb-4 text-2xl font-bold text-amber-900">{product.price}</p>

        <p className="mb-6 text-black leading-relaxed font-serif">{product.description}</p>

        {/* Buy button */}
        <div className="flex gap-4">
          <a
            href={product.shopeeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-black text-white py-3 text-center font-bold transition-all duration-300 hover:bg-gray-800"
          >
            Buy on Shopee
          </a>
          <button
            onClick={onClose}
            className="flex-1 rounded-lg bg-orange-500 text-white font-bold transition-all duration-300 hover:bg-orange-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
