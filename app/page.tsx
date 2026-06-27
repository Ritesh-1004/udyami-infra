import Hero from "@/components/home/Hero";
import StatsCounter from "@/components/home/StatsCounter";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <FeaturedProjects />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <ContactCTA />
    </>
  );
}
