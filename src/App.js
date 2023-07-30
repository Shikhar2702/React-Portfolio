import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/skills" Component={Skills} />
      <Route path="/contact" Component={Contact} />
    </Routes>
  );
};

export default App;
