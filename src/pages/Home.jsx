import React from "react";
import Header from "../components/Header";
import AboutSection from "../components/About";
import TestimonialSlider from "../components/Testimoni";

const Home = () => {
  return (
    <>
      <Header id="header" />
      <AboutSection id="aboutSection" />
      <TestimonialSlider id="testimoniSection" />
    </>
  );
};

export default Home;
