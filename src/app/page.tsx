import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
// import { GallerySection } from "@/components/sections/gallery-section"
import { DonateSection } from "@/components/sections/donate-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
// import { EventsSection } from '../components/sections/events-section';
// import { TeamSection } from '../components/sections/team-section';
// import { TestimonialsSection } from '../components/sections/testimonials-section';
import { PartnersSection } from '../components/sections/partners-section';
// import { ProgramsSection } from '../components/sections/programs-section';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        {/* <ProgramsSection /> */}
        <ServicesSection />
        {/* <GallerySection /> */}
        {/* <EventsSection/> */}
        {/* <TeamSection/> */}
        {/* <TestimonialsSection/> */}
        <PartnersSection/>
        <DonateSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
