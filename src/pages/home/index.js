import Arrivals from "components/Arrivals";
import Banner from "components/banner";
import BannerMission from "components/banner-mission";
import Collections from "components/collections";
import Container from "components/container";
import HomeSlider from "components/homeSlide";
import Menu from "components/menu";
import ProgressBar from "components/progress-bar";
import Support from "components/support";
import TopSell from "components/top-selling";
import React from "react";

const Home = () => {
  return (
    <Container>
      <HomeSlider />
      <Collections />
      <Menu />
      <ProgressBar />
      <TopSell />
      <Banner />
      <Support />
      <BannerMission />
      <Arrivals />
    </Container>
  );
};

export default Home;
