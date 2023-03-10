import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import ImageGallery from "./ImageGallery"
import NavBar from "./Header";
import Greeting from "./Greeting";
import SocialLinks from "./SocialLinks";
import About from "./About";
import Projects from "./Projects";
import CaseConnect from "./CaseConnect"
import StressBuster from "./StressBuster"
import GameChest from "./GameChest";
import ScrollToTop from "./ScrollToTop";



function App() {
  return (
    <Router >
      <ScrollToTop />
      <NavBar />
      <SocialLinks />
      <Switch>
        <Route exact path="/">
          <Greeting />
          <ImageGallery />
          <About />
          <Projects />
        </Route>
        <Route path="/case-connect">
          <CaseConnect />
          <ScrollToTop />
        </Route>
        <Route path="/stress-buster">
          <StressBuster />
        </Route>
        <Route path="/game-chest">
          <GameChest />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
