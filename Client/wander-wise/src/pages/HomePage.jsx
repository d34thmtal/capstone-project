import React from "react";
import ListingPage from "./ListingPage";
import MainLayout from "../layout/MainLayout";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ListingPage />
    </MainLayout>
  );
}
