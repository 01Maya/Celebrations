"use client"

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full bg-gradient-to-b from-[#4A2511] to-[#3A1E0A] text-white py-16 sm:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-200 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite 3s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFB3D9]">
              CELEBRATIONS
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing joy and celebration to every moment since the beginning. Sharing happiness one chocolate at a
              time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFB800]">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Products", "Flavours", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-[#FFB800] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFB800]">Follow Us</h4>
            <ul className="space-y-3">
              {["Facebook", "Instagram", "Twitter", "TikTok"].map((social) => (
                <li key={social}>
                  <a href="#" className="text-gray-300 hover:text-[#FFB800] transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFB800]">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Get updates on new flavours and celebrations.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-[#FFB800] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-[#E73A3A] to-[#FFB800] rounded-lg font-bold hover:shadow-lg transition-all active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFB800] to-transparent mb-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Celebrations. All rights reserved. Sharing Happiness Since Day One.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-gray-400 hover:text-[#FFB800] transition-colors text-sm">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Floating decorative element */}
        <div className="absolute bottom-8 right-8 text-6xl opacity-10 animate-float pointer-events-none">🎉</div>
      </div>
    </footer>
  )
}
