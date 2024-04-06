import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
