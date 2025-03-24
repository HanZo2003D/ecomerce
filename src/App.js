// import { Route, Routes } from "react-router-dom";

// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import HomePage from "./pages/HomePage";
// import CartPage from "./pages/CartPage";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/Signup" element={<SignUp />} />
//       <Route path="/Login" element={<Login />} />
//       <Route path="/Cart" element={<CartPage />} />
//     </Routes>
//   );
// };

// export default App;

import React, { useState } from "react";
import Cart from "./components/Cart";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import ContactPage from "./pages/ContactPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Buy from "./components/Buy";
import Mens from "./components/Mens";
import Electronic from "./components/Electronic";
import Women from "./components/Women";
import Jewerly from "./components/Jewerly";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ email: "", name: "" });
  const navigate = useNavigate();
  // Simulate a login
  const handleLogin = (email, name) => {
    setUser({ email, name });
    setIsLoggedIn(true);
  };

  // Simulate a logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };
  const handleSignup = (email, name) => {
    setUser({ email, name });
    setIsLoggedIn(true);
  };
  // src/data/products.js
  const products = [
    {
      id: 1,
      name: "Smartphone",
      category: "Electronics",
      price: 500,
      description: "Latest model smartphone",
      image: "smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      category: "Electronics",
      price: 1000,
      description: "High-performance laptop",
      image: "laptop.jpg",
    },
    {
      id: 3,
      name: "T-Shirt",
      category: "Mens",
      price: 25,
      description: "Cotton T-shirt",
      image: "tshirt.jpg",
    },
    {
      id: 4,
      name: "Jeans",
      category: "Mens",
      price: 40,
      description: "Stylish denim jeans",
      image: "jeans.jpg",
    },
    {
      id: 5,
      name: "Novel",
      category: "Womens",
      price: 15,
      description: "Best-selling novel",
      image: "novel.jpg",
    },
    {
      id: 6,
      name: "Cookbook",
      category: "Womens",
      price: 30,
      description: "Delicious recipes",
      image: "cookbook.jpg",
    },
    {
      id: 7,
      name: "Washing Machine",
      category: "Jewelery",
      price: 200,
      description: "Efficient washing machine",
      image: "washing-machine.jpg",
    },
    {
      id: 8,
      name: "Microwave",
      category: "Jewelery",
      price: 150,
      description: "Quick and easy microwave",
      image: "microwave.jpg",
    },
  ];

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<ProductPage products={products} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp onSignup={handleSignup} />} />
        <Route
          path="/profile"
          element={<Profile onLogout={handleLogout} user={user} />}
        />
        <Route path="/product/:id" element={<Buy products={products} />} />\
        <Route path="/mens" element={<Mens products={products} />} />
        <Route
          path="/electronic"
          element={<Electronic products={products} />}
        />
        <Route path="/jewelery" element={<Jewerly products={products} />} />
        <Route path="/womens" element={<Women products={products} />} />
      </Routes>
    </div>
  );
}

export default App;
