import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import SobreMiSection from "@/components/sections/SobreMiSection";
import ServiciosSection from "@/components/sections/ServiciosSection";
import PodcastSection from "@/components/sections/PodcastSection";
import RecursosSection from "@/components/sections/RecursosSection";
import TalleresSection from "@/components/sections/TalleresSection";
import ContactoSection from "@/components/sections/ContactoSection";

export default function HomePage() {
  return (
    <>
      {/* Skip to content — accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100]
                   focus:top-4 focus:left-4
                   bg-crema-100 text-malva-800 font-semibold
                   px-4 py-2 rounded-full text-sm"
      >
        Ir al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <SobreMiSection />
        <ServiciosSection />
        <PodcastSection />
        <RecursosSection />
        <TalleresSection />
        <ContactoSection />
      </main>

      <Footer />

      {/* Botón flotante WhatsApp */}
      <WhatsAppButton />
    </>
  );
}
