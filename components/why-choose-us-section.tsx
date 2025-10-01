"use client"

import { CheckCircle, Clock, DollarSign, Headphones, Award, Building } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function WhyChooseUsSection() {
  const reasons = [
    { icon: CheckCircle, text: "Regulatory Compliance (PCN, NAFDAC, SON)" },
    { icon: Award, text: "Quality Assurance (WHO-GMP certified manufacturers)" },
    { icon: Clock, text: "Fast & Reliable Delivery" },
    { icon: DollarSign, text: "Competitive Pricing" },
    { icon: Headphones, text: "24/7 Customer Support" },
    { icon: Building, text: "Backed by Dunbird Empire" },
  ]

  const stats = [
    { number: "500+", label: "Healthcare Partners" },
    { number: "1,000+", label: "Products Imported" },
    { number: "99.9%", label: "Quality Rate" },
    { number: "24/7", label: "Customer Support" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-playfair)]">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground/80 font-medium">{reason.text}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-playfair)]">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
