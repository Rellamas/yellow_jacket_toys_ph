import React from "react"

export default function Contact() {
  const socialLinks = [
    { name: "TikTok", icon: "tiktok", url: "https://www.tiktok.com/@yellowjacketph" },
    { name: "Shopee", icon: "shopee", url: "https://shopee.ph/yellowjacketph" },
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/YellowJacketToysPH" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/yellowjacketph/?fbclid=IwY2xjawOBeaVleHRuA2FlbQIxMABicmlkETFRdVdHZ3VMRHNRZzUyWEJ2c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoi4MA-DEG7y8tZujwBrN5ljOiO6UvO8TS2tmw8TJ_H7UPvuowW8AQyI-ZEL_aem_qZvHzstwByHq3i65Wl2pfw" },
  ]

  return (
    <footer id="contact" className="bg-orange-500 text-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 tracking-wide">CONTACT US</h2>
          <p className="text-xl font-serif">A shop running for 6 years, providing all your kidult needs</p>
        </div>

        {/* Socials Box */}
        <div className="bg-yellow-300 rounded-3xl p-12 max-w-2xl mx-auto shadow-xl">
          <h3 className="text-center text-3xl font-bold text-amber-900 mb-12 tracking-wide">SOCIALS</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
                aria-label={social.name}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <SocialIcon icon={social.icon} />
                </div>
                <span className="text-center font-bold text-black text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-600 mt-12 pt-8 text-center">
          <p className="font-serif">&copy; 2025 Yellow Jacket Toys PH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }: { icon: string }): React.ReactElement | null {
  const icons: Record<string, React.ReactElement> = {
    facebook: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
      </svg>
    ),
    shopee: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
      </svg>
    ),
    tiktok: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.89 2.89 0 1 1-5.92-2.32 2.9 2.9 0 0 1 2.31-1.46V9.4a6.59 6.59 0 0 0-6.59 6.59 6.59 6.59 0 0 0 6.59 6.59 6.52 6.52 0 0 0 6.59-6.59V11.9a8.38 8.38 0 0 0 3.77 1.23V9.4a4.84 4.84 0 0 1-3.77-2.71z" />
      </svg>
    ),
  }

  return icons[icon] || null
}
