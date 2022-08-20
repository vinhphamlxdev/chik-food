import React from "react";
import logoLoading from "assets/loading/img1.gif";
const LoadingScreen = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white ">
      <div className="flex absolute items-center  justify-center w-[300px] h-[300px] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <img className="object-cover w-full " src={logoLoading} alt="" />
      </div>
    </div>
  );
};

export default LoadingScreen;
