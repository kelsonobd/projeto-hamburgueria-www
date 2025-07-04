import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Dashboard from "../pages/Admin/Dashboard";
import AdicionarHamburguer from "../pages/Admin/AdicionarHamburguer";
import AdminLogin from "@/pages/Admin/AdminLogin";
import PainelAdminHome from "../pages/Admin/PainelAdminHome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<PainelAdminHome />} />
        <Route path="/admin/adicionar" element={<AdicionarHamburguer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
