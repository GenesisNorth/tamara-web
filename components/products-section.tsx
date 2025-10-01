"use client"

import { Card } from "@/components/ui/card"
import { Heart, Pill, Brain, Wind, Activity, Baby, Scale, Shield, Stethoscope } from "lucide-react"

export default function ProductsSection() {
  const products = [
    { icon: Heart, name: "Cardiovascular Medicines" },
    { icon: Pill, name: "Antibiotics & Anti-infectives" },
    { icon: Brain, name: "Neurological Medications" },
    { icon: Wind, name: "Respiratory Care Products" },
    { icon: Activity, name: "Oncology Treatments" },
    { icon: Baby, name: "Pediatric Medicines" },
    { icon: Scale, name: "Weight Loss Products" },
    { icon: Shield, name: "HIV/AIDS Therapeutics" },
    { icon: Stethoscope, name: "Medical Equipment & Devices" },
  ]

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-playfair)]">
            Our Product Categories
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-2">We import and distribute:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="p-6 bg-white border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">{product.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-white border border-border rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
          <p className="text-foreground/80 text-center leading-relaxed">
            All products sourced from <strong className="text-primary">WHO-GMP & ISO-certified manufacturers</strong>,
            ensuring compliance with <strong className="text-primary">NAFDAC & SON regulations</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
