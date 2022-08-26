import { useState } from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Categories from "./components/Categories";
import NewArrivals from "./components/NewArrivals";
import HeroStatic from "./components/HeroStatic";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="container">
      <div className="promo-bar">FREE SHIPPING ON ALL ORDERS OVER $75</div>
      <Header />
      <HeroSlider />
      <Categories />
      <NewArrivals />
      <HeroStatic />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
