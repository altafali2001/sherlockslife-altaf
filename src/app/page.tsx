import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CTAStats from "@/components/home/CTAStats";
import AboutFanFest from "@/components/home/AboutFanFest";
import Features from "@/components/home/Features";
import CreatorPerks from "@/components/home/CreatorPerks";
import Eligibility from "@/components/home/Eligibility";
import ApplicationTimeline from "@/components/home/ApplicationTimeline";
import ApplyForm from "@/components/home/ApplyForm";
import FaqSection from "@/components/home/FaqSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909]">
      <Navbar />
      <Hero />
      <CTAStats />
      <AboutFanFest />
      <Features />
      <CreatorPerks />
      <Eligibility />
      <ApplicationTimeline />
       <ApplyForm />
        <FaqSection />
        <Footer />
    </main>
  );
}