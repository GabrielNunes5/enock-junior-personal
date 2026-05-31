import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
    return (
        <section className="min-h-screen bg-background text-foreground font-inter">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </section>
    );
}