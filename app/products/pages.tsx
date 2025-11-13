"use client"
import React from "react"
import FeaturedFigurines from "../../components/featured-figurines"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-yellow-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">PRODUCTS</h1>
          <p className="text-lg text-gray-700">Find all the figures you need for your collection</p>
        </div>
        <FeaturedFigurines />
      </div>
    </main>
  )
}
