"use client"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-playfair)]">TamaraPharm LTD™</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Your Trusted Partner in Pharmaceutical Excellence
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>RC: 8552272</p>
              <p>Subsidiary of Dunbird Empire Limited</p>
              <p>Licensed by PCN / NAFDAC / SON</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Contact Info</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p>House 139c, Cluster 5, River Park Estate</p>
              <p>Airport Road, Abuja FCT, Nigeria</p>
              <p className="pt-2">
                <a href="mailto:dunbirdempire01@gmail.com" className="hover:text-primary-foreground transition-colors">
                  dunbirdempire01@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+2348068167945" className="hover:text-primary-foreground transition-colors">
                  +234 806 816 7945
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">© 2025 TamaraPharm LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
