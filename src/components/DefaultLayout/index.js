import React from "react";
import Footer from "./footer";
import Header from "./header";
import Topbar from "./topbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
