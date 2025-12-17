import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import LessonLearnt from "./pages/LessonLearnt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FEMProductPage from "./components/FEMProductPage";

const App = () => {
  return (
    <BrowserRouter basename="/E-commerce-Cart-Product-Page/">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<FEMProductPage />} />
          <Route path="home" element={<Home />} />
          <Route path="home/:slug" element={<Detail />} />
          <Route path="lessons" element={<LessonLearnt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
