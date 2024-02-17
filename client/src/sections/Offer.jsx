import React from "react";
import Button from "../components/Button";

const Offer = () => {
  return (
    <section className="w-full my-16 h-auto pt-12 bg-primary-900">
      <header className="container text-white flex sm:flex-row flex-col justify-between sm:items-center">
        <div className="flex sm:h-52 h-36 flex-col font-poppins sm:justify-evenly justify-around">
          <span className="sm:text-xl text-sm">1 June - 10 June 2022</span>
          <h2 className="sm:text-5xl text-3xl font-bebasNeue">
            2022 New Arrivals
          </h2>
          <h3 className="sm:text-3xl text-xl">Get 20% off on every products</h3>
          <p className="font-plusJakrta sm:text-xl text-xs">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
        </div>
        <Button name="SHOP NOW" />
      </header>
      <div className=" container mt-10 w-full mx-auto flex justify-center items-end gap-4  ">
        <img src="/shoe1.png" className="w-1/4" />
        <img src="/shoe2.png" className="w-1/4" />
        <img src="/shoe3.png" className="w-1/4" />
        <img src="/shoe4.png" className="w-1/4" />
      </div>
    </section>
  );
};

export default Offer;
