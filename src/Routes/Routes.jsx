import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Project from "../Pages/Project/Project";
import { GlobalStyle } from "../Style/globalStyle";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../Style/Theme";

const Routes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projeto/:nome" element={<Project />} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Routes;
