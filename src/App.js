import React from "react";
import { NewsPage, Home, Store, EdHome } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/education" element={<EdHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
