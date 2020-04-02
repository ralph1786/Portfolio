import React, { Fragment } from "react";
import "./App.scss";
import Contact from "./containers/Contact";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import About from "./containers/About";

function App() {
  return (
    <Fragment>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
