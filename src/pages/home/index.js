import Arrivals from "components/Arrivals";
import Banner from "components/banner";
import BannerMission from "components/banner-mission";
import Collections from "components/collections";
import HomeSlider from "components/homeSlide";
import Menu from "components/menu";
import ProgressBar from "components/progress-bar";
import Support from "components/support";
import TopSell from "components/top-selling";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div>
        <HomeSlider />
        <Collections />
        <Menu />
        <ProgressBar />
        <TopSell />
        <Banner />
        <Support />
        <BannerMission />
        <Arrivals />
      </div>
    </Fragment>
  );
};

export default Home;
