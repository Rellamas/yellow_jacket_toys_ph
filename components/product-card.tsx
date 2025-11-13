"use client"
import React from "react";

export default function ProductCard({ product, onSelect }: any) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="cursor-pointer rounded-3xl overflow-hidden bg-yellow-300 transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="font-bold text-black mb-3 line-clamp-2 text-sm text-center font-serif">{product.name}</h3>
        <p className="text-center font-bold text-lg text-amber-900">Regular price - {product.price}</p>
      </div>
    </div>
  )
}
