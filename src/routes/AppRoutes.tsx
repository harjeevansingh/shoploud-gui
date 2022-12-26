import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Header from "../Components/Molecules/Header";
import Login from "../container/Login";
import Signup from "../container/Signup";

const Index: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/products", { replace: true });
  }, [navigate]);
  return <div>Redirecting...</div>;
};

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Index />} />

        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
