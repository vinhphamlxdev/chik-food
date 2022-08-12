import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setBgHeader } from "redux-toolkit/global/globalSlice";

const Container = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      scrollValue > 20
        ? dispatch(setBgHeader(true))
        : dispatch(setBgHeader(false));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="w-full overflow-hidden">{children}</div>;
};

export default Container;
