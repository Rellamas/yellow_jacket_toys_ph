"use client"

import React from "react"
import About from "../../components/about"
import MissionVision from "../../components/mission-vision"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-yellow-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <About />
        <div className="mt-16">
          <MissionVision />
        </div>
      </div>
    </main>
  )
}
