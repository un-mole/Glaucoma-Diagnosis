import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Diagnosis from "./components/Diagnosis";
import Results from "./components/Results";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col w-screen">
        <Navbar />
        <div className="bg-white h-5"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
