import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import OurBusiness from "../components/OurBusiness";
import AboutUs from "../components/AboutUs";
import DirectorsMessage from "../components/DirectorsMessage";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <OurBusiness />
      <AboutUs />
      <DirectorsMessage />
      <CallToAction />
      <Footer />
    </div>
  );
}
