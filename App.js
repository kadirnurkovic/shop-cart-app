import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import AboutPage from "./components/Pages/AboutPage";
import CartPage from "./components/Pages/CartPage";
import HomePage from "./components/Pages/HomePage";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;