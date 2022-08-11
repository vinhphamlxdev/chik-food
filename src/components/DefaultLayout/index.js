import React from "react";
import BackTop from "./backTop";
import Footer from "./footer";
import Header from "./header";
import QuickView from "./quickView";
import Topbar from "./topbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <>{children}</>
      <QuickView />
      <BackTop />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
