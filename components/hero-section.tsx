"use client"

import { Button } from "@/components/ui/button"
import { Shield, Globe, Award } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-emerald-50 via-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-playfair)] leading-tight animate-fade-in-up">
            Trusted Partners in Pharmaceutical Importation
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed animate-fade-in-up delay-100">
            TamaraPharm LTD is your reliable partner for pharmaceutical importation and distribution in Nigeria. We
            ensure access to quality medications through regulatory compliance and strategic partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-200">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-base md:text-lg px-8 py-6"
              onClick={() => scrollToSection("products")}
            >
              View Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-base md:text-lg px-8 py-6 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in delay-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Licensed</h3>
              <p className="text-sm text-foreground/70 text-center">Fully Compliant</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in delay-400">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Global</h3>
              <p className="text-sm text-foreground/70 text-center">International Partnerships</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in delay-500">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Trusted</h3>
              <p className="text-sm text-foreground/70 text-center">Quality Assurance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
