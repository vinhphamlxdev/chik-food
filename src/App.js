import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { lightTheme } from "themes/themesData";
import { publicRoutes } from "routes";
import DefaultLayout from "components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  setBgHeader,
  setLoadingScreen,
} from "redux-toolkit/global/globalSlice";
import { AuthProvider } from "contexts/auth-context";
import LoadingScreen from "components/loading/LoadingScreen";

function App() {
  const dispatch = useDispatch();
  const { loadingScreen } = useSelector((state) => state.global);
  const handleLoadingScreen = () => {
    setTimeout(() => {
      dispatch(setLoadingScreen(false));
    }, 2500);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoadingScreen);
    return () => window.removeEventListener("load", handleLoadingScreen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <Fragment>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles></GlobalStyles>

        <AuthProvider>
          {loadingScreen && <LoadingScreen />}
          {!loadingScreen && (
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
          )}
        </AuthProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
