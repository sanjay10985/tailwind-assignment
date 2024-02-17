import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Header = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center bg-primary-100">
      <Navbar />
      <div className="container h-full flex flex-col justify-between mt-8 items-center">
        <h1 className="font-bebasNeue text-5xl sm:text-6xl text-center mx-auto  max-w-4xl ">
          Fashionable, quality, durable and best shoes for everyone{" "}
        </h1>

        <Button name="Shop Now" />
        <div className="w-full mx-auto flex justify-center items-end gap-4  ">
          <img src="/image1.png" className="w-1/4" />
          <img src="/image2.png" className="w-1/4" />
          <img src="/image3.png" className="w-1/4" />
          <img src="/image4.png" className="w-1/4" />
        </div>
      </div>
    </section>
  );
};

export default Header;
