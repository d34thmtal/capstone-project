import React from "react";
import MainLayout from "../layout/MainLayout";
import HeroSection from "../components/HeroSection";
import PropertySlider from "../components/PropertySlider";
import ListingPage from "./ListingPage";
import CardSlider from "../components/CardSlider";


export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />

      <CardSlider />
      <ListingPage />
    </MainLayout>
  );
}
