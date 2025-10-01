"use client"

import { Package, Stethoscope, FileCheck, Truck, Handshake } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: "Pharmaceutical Importation",
      description: "Import of registered products from certified manufacturers.",
    },
    {
      icon: Stethoscope,
      title: "Medical Equipment Sourcing",
      description: "ISO-certified diagnostic & surgical equipment.",
    },
    {
      icon: FileCheck,
      title: "Regulatory & Customs Clearance",
      description: "Full handling of documentation & clearance.",
    },
    {
      icon: Truck,
      title: "Wholesale Distribution",
      description: "Reliable supply to hospitals, pharmacies, and clinics.",
    },
    {
      icon: Handshake,
      title: "Partnership Facilitation",
      description: "Strategic alliances with global manufacturers.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-playfair)]">
            Our Services
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Comprehensive pharmaceutical importation, equipment sourcing, and distribution solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-6 bg-white border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
