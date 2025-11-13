"use client"

import React from "react"
import Hero from "../components/hero"
import ValueProposition from "../components/value-proposition"
import FeaturedProductsPromo from "../components/featured-products-promo"
import MissionVision from "../components/mission-vision"

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50">
      <Hero />
      <ValueProposition />
      <FeaturedProductsPromo />
      <MissionVision />
    </main>
  )
}
