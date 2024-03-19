import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Nabar";
import HomeIndex from "./pages/home/HomeIndex";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Features from "./pages/features/Features";
import Menu from "./pages/menu/Menu";
import Chef from "./pages/chefs/chef/Chef";
import Contact from "./pages/contacts/Contact";
import Testimonials from "./pages/testimonials/Testimonials";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/products/SingleProduct";
import Carts from "./pages/cart/Carts";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productsId" element={<SingleProduct />} />
          <Route path="/features" element={<Features />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chefs" element={<Chef />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
