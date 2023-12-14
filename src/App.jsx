import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateMember from "./pages/CreateMember";
import SuccessPage from "./pages/Success";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members/create" element={<CreateMember />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
