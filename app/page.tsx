import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ComplianceSection from "@/components/compliance-section"
import ProductsSection from "@/components/products-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ComplianceSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
