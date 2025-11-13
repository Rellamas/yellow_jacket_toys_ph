"use client"

import React, { useState } from "react"
import ProductCard from "./product-card"
import ProductModal from "./product-modal"

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Nendoroid Frieren Winter Clothes Ver.",
    price: "₱2,255.00",
    image: "public/products/nendoroid_frieren_winter_clothes.png",
    description: "From the anime Frieren: Beyond Journey's End comes a Nendoroid of Frieren in her winter clothes! Face plates:· Blow kiss face· Smug face· Silly face. Optional parts:· Heart· Trunk· Other optional parts for different poses",
    shopeeLink: "https://shopee.ph/Nendoroid-Frieren-Winter-Clothes-Ver.-i.46216431.42209317086?extraParams=%7B%22display_model_id%22%3A178994273534%7D",
  },
  {
    id: 2,
    name: "Nendoroid Bachira Meguru (BLUELOCK)",
    price: "₱2,255.00",
    image: "public/products/nendoroid_bachira_meguru_(BLUELOCK).png",
    description: "From the anime series BLUELOCK comes a Nendoroid of Bachira Meguru! Face plates:· Smiling face· Winking face· Taunting face. Optional parts:· Soccer ball· Pineapple· Other optional parts for different poses.",
    shopeeLink: "https://shopee.ph/Nendoroid-Bachira-Meguru-(BLUELOCK)-i.46216431.41459313085?extraParams=%7B%22display_model_id%22%3A260780737681%7D",
  },
  {
    id: 3,
    name: "Nendoroid Jinx (Arcane Ver.)",
    price: "₱2,771.00",
    image: "public/products/nendoroid_jinx_(Arcane_Ver.).png",
    description: "OFFICIAL PRODUCT FROM GOOD SMILE COMPANY!- ARRIVING WITHIN 7 DAYS. From Arcane, the hit Netflix animated series based on the world-renowned League of Legends video game, comes a Nendoroid of Arcane Jinx. Face plates: -Derisive face -Crazed face -Serious face. Optional parts: -Rhino gun rocket launcher -Zap gun -Other optional parts for different poses. ",
    shopeeLink: "https://shopee.ph/Nendoroid-Jinx-(Arcane-Ver.)-i.46216431.44475434550?extraParams=%7B%22display_model_id%22%3A262062727140%7D",
  },
]

export default function FeaturedFigurines() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof SAMPLE_PRODUCTS)[0] | null>(null)

  return (
    <>
      <section id="products" className="bg-yellow-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4 tracking-wide">PRODUCTS</h2>
            <p className="text-lg text-black font-serif">Find all the figures you need for your collection</p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-md px-4 py-3 border-2 border-black rounded-full flex items-center gap-3 bg-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 outline-none text-black font-serif"
              />
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
            ))}
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}
