"use client"
import React from "react"

export default function ContactPage() {
  const socials = [
    {
      name: "TikTok",
      icon: "public/images/socials/tiktok.png",
      url: "https://www.tiktok.com/@yellowjacketph",
      color: "bg-black",
    },
    {
      name: "Shopee",
      icon: "public/images/socials/shopee.png",
      url: "https://shopee.ph/yellowjacketph",
      color: "bg-red-500",
    },
    {
      name: "Facebook",
      icon: "public/images/socials/facebook.png",
      url: "https://www.facebook.com/YellowJacketToysPH",
      color: "bg-blue-600",
    },
    {
      name: "Instagram",
      icon: "public/images/socials/instagram.png",
      url: "https://www.instagram.com/yellowjacketph/?fbclid=IwY2xjawOBeaVleHRuA2FlbQIxMABicmlkETFRdVdHZ3VMRHNRZzUyWEJ2c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoi4MA-DEG7y8tZujwBrN5ljOiO6UvO8TS2tmw8TJ_H7UPvuowW8AQyI-ZEL_aem_qZvHzstwByHq3i65Wl2pfw",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ]

  return (
    <main className="min-h-screen bg-yellow-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">CONTACT US</h1>
          <p className="text-lg text-gray-700">A shop running for 6 years, providing all your kidult needs</p>
        </div>

        <div className="bg-yellow-300 rounded-3xl p-12 sm:p-16">
          <h2 className="text-center text-3xl font-bold text-black mb-12">FOLLOW OUR SOCIALS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform"
              >
                <div className={`${social.color} rounded-full p-6 mb-4 w-24 h-24 flex items-center justify-center`}>
                  <span className="text-3xl text-white font-bold">{social.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-black text-center">{social.name}</h3>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Have questions? Send us a message on any of our social media platforms!</p>
          <p className="text-sm text-gray-600">We usually respond within 24 hours</p>
        </div>
      </div>
    </main>
  )
}
