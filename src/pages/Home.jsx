import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Organizations from "../components/Organizations";
import CustomRating from "../components/CustomRating";
import Awards from "../components/Awards";
import Footer from "../components/Footer";
import CreateUser from "../components/CreateUser";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Organizations />
      <CustomRating />
      <CreateUser />
      <Awards />
      <Footer />
    </div>
  );
}
