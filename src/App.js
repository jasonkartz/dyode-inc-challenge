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
    <>
      <div className="promo-bar">FREE SHIPPING ON ALL ORDERS</div>
      <Header />
      <HeroSlider />
      <Categories />
      <NewArrivals />
      <HeroStatic />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
