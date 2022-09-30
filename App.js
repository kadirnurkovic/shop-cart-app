import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import AboutPage from "./components/Pages/AboutPage";
import CartPage from "./components/Pages/CartPage";
import HomePage from "./components/Pages/HomePage";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;