import React from 'react';

export default function Footer() {
    return (
      <footer className="bg-orange-500 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left - Copyright */}
            <div className="text-sm">
              <p>© 2025 Yellow Jacket Toys PH. All rights reserved.</p>
            </div>
  
            {/* Right - Social Media Icons */}
            <div className="flex gap-6 items-center">
              <a
                href="https://www.facebook.com/YellowJacketToysPH"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/yellowjacketph/?fbclid=IwY2xjawOBeaVleHRuA2FlbQIxMABicmlkETFRdVdHZ3VMRHNRZzUyWEJ2c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoi4MA-DEG7y8tZujwBrN5ljOiO6UvO8TS2tmw8TJ_H7UPvuowW8AQyI-ZEL_aem_qZvHzstwByHq3i65Wl2pfw"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.653.25-1.2.555-1.742 1.097-.54.54-.846 1.088-1.097 1.742-.266.788-.465 1.658-.525 2.935C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.528 2.936.25.653.555 1.2 1.097 1.742.54.54 1.089.846 1.742 1.097.788.266 1.658.465 2.935.525C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.528.653-.25 1.2-.555 1.742-1.097.54-.54.846-1.089 1.097-1.742.266-.788.465-1.658.525-2.935.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.528-2.936-.25-.653-.555-1.2-1.097-1.742-.54-.54-1.089-.846-1.742-1.097-.788-.266-1.658-.465-2.935-.525C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.064 1.17.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.381.164.422.354 1.057.408 2.227.055 1.264.064 1.646.064 4.85s-.009 3.585-.064 4.849c-.054 1.17-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.055-1.646.064-4.85.064s-3.585-.009-4.849-.064c-1.17-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.354-1.057-.408-2.227-.055-1.264-.064-1.646-.064-4.85s.009-3.585.064-4.849c.054-1.17.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.055 1.646-.064 4.85-.064l-.003 1.77z" />
                </svg>
              </a>
              <a
                href="https://shopee.ph/yellowjacketph"
                target="_blank"
                rel="noopener noreferrer"
                title="Shopee"
                className="hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.5c5.238 0 9.5 4.262 9.5 9.5S17.238 21.5 12 21.5 2.5 17.238 2.5 12 6.762 2.5 12 2.5zm1.5 8h-3v4h3v-4zm-5-2h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@yellowjacketph"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                className="hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 5.2-1.74V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.54-.05z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  