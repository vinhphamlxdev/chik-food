import Arrivals from "components/Arrivals";
import Banner from "components/banner";
import BannerMission from "components/banner-mission";
import Collections from "components/collections";
import Footer from "components/footer";
import Header from "components/header";
import HomeSlider from "components/homeSlide";
import Menu from "components/menu";
import ProgressBar from "components/progress-bar";
import TopSell from "components/top-selling";
import Topbar from "components/topbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <HomeSlider />
      <Collections />
      <Menu />
      <ProgressBar />
      <TopSell />
      <Banner />
      <BannerMission />
      <Arrivals />
      <Footer />
    </div>
  );
};

export default Home;
