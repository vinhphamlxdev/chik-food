import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { lightTheme } from "themes/themesData";
import { publicRoutes } from "routes";
import DefaultLayout from "components/DefaultLayout";
import { useDispatch } from "react-redux";
import { setBgHeader } from "redux-toolkit/global/globalSlice";

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
