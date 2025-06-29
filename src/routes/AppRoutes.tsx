import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Dashboard from "../pages/Admin/Dashboard";
import AdicionarHamburguer from "../pages/Admin/AdicionarHamburguer";
import AdminHome from "../pages/Admin/AdminHome";
import AdminLogin from "@/pages/Admin/AdminLogin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/adicionar" element={<AdicionarHamburguer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
