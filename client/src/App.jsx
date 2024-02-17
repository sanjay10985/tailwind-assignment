import React from "react";
import Header from "./sections/Header";
import Collection from "./sections/Collection";
import NewArrivals from "./sections/NewArrivals";
import Offer from "./sections/Offer";
import Brands from "./sections/Brands";
import AboutUs from "./sections/AboutUs";
import Inspiration from "./sections/Inspiration";

const App = () => {
  return (
    <div className="w-full h-auto">
      <Header />
      <Collection />
      <NewArrivals />
      <Offer />
      <Brands />
      <AboutUs />
      <hr className="text-black" />
      <Inspiration />
    </div>
  );
};

export default App;
