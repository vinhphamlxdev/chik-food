import Collections from "components/collections";
import Header from "components/header";
import HomeSlider from "components/homeSlide";
import Topbar from "components/topbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <HomeSlider />
      <Collections />
    </div>
  );
};

export default Home;
