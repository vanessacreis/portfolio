import React, { useState } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";
import Portfolio from "../Pages/Portfolio/Portfolio.jsx";
import Project from "../Pages/Project/Project.jsx";
import { GlobalStyle } from "../Style/globalStyle";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../Style/theme";
import Header from "../Components/Header/Header.jsx";

const Routes = () => {
  const [theme, setTheme] = useState(true);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ? dark : light}>
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme} />
        <Switch>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/sobre" element={<About theme={theme} />} />
          <Route path="/portfolio" element={<Portfolio theme={theme} />} />
          <Route path="/projeto/:nome" element={<Project theme={theme} />} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Routes;
