import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { lightTheme } from "themes/themesData";
import Home from "pages/home";
import Collection from "pages/collection";
import ShopPage from "pages/shop";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles></GlobalStyles>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
        </Routes>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
