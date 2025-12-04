import {
  Header,
  Hero,
  Destinations,
  Packages,
  WhyChooseUs,
  HowItWorks,
  Testimonials,
  TrustSection,
  Footer,
} from "@/components/landing";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
