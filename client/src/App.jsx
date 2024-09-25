import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Cart from "./Pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import VerifyAdmin from "./Pages/VerifyAdmin";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/admin-verify" element={<VerifyAdmin />} />
          <Route path="/admin/admin-login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
