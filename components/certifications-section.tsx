"use client"

import { Award, Thermometer, FlaskConical, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function CertificationsSection() {
  const certifications = [
    {
      icon: Award,
      title: "WHO-GMP Compliance",
      description: "All products meet World Health Organization Good Manufacturing Practice standards.",
    },
    {
      icon: Thermometer,
      title: "Cold Chain Management",
      description: "Temperature-controlled storage and transportation for sensitive medications.",
    },
    {
      icon: FlaskConical,
      title: "Rigorous Quality Testing",
      description: "Every batch undergoes comprehensive quality assurance testing.",
    },
    {
      icon: FileText,
      title: "Complete Documentation Standards",
      description: "Full traceability and documentation for all imported products.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-playfair)]">
            Quality Certifications
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Our commitment to excellence is backed by international quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 md:p-8 bg-white border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{cert.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
