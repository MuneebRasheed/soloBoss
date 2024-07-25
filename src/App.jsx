import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Loading from "./Pages/Loading";
import Main from "./Pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="loading" element={<Loading />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
