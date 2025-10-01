"use client"

import { Shield, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ComplianceSection() {
  const licenses = [
    {
      name: "Pharmacists Council of Nigeria (PCN)",
      status: "Licensed",
    },
    {
      name: "NAFDAC",
      status: "Licensed",
    },
    {
      name: "Standards Organisation of Nigeria (SON)",
      status: "Fully Licensed",
    },
    {
      name: "Corporate Affairs Commission",
      status: "RC 8552272",
    },
  ]

  return (
    <section id="compliance" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-playfair)]">
            Regulatory Compliance
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            TamaraPharm LTD™ is fully licensed and registered with:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {licenses.map((license, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">{license.name}</h3>
                  <p className="text-sm text-primary font-medium">{license.status}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-4xl mx-auto">
          <p className="text-foreground/80 text-center">
            <strong className="text-foreground">Important:</strong> Regulatory licenses are view-only. Verification
            requests can be submitted via the contact form.
          </p>
        </div>
      </div>
    </section>
  )
}
