import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Page404 from "./components/common/Page404";
import CheckoutPage from "./pages/CheckoutPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/checkout/:id" element={<CheckoutPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
