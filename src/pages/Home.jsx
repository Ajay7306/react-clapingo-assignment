import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Offer from "../components/offer";
import Work from "../components/Work";
import Whychoose from "../components/Whychoose";
import New from "../components/New";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
          <Hero />
          <Stats />
          <Offer />
          <Work />
          <div className="w-[100%] p-6">
            <Whychoose />
            <New />
          </div>
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
