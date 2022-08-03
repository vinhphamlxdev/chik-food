import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { lightTheme } from "themes/themesData";
import Home from "pages/home";
import Collection from "pages/collection";
import ShopPage from "pages/shop";
import BackTop from "components/backTop";
import { publicRoutes } from "routes";
import DefaultLayout from "components/DefaultLayout";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles></GlobalStyles>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              ></Route>
            );
          })}
        </Routes>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
