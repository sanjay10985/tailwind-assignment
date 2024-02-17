import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";

const NewArrivals = () => {
  return (
    <section className="container flex flex-col my-16 gap-4">
      <header className="flex h-24 flex-col justify-around">
        <h2 className="text-5xl font-bebasNeue">2022 New Arrivals</h2>
        <p className="font-plusJakrta">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at nunc
          elit in porttitor tortor nulla.
        </p>
      </header>
      <div className="flex justify-between gap-4 mt-8 md:flex-row flex-col">
        <NewArrivalItem src="/rectangle1.png" title="Athletic Shoe" />
        <NewArrivalItem src="/rectangle2.png" title="Maroon Wedget" />
        <NewArrivalItem src="/rectangle3.png" title="Green Leather Shoe" />
      </div>
    </section>
  );
};

const NewArrivalItem = ({ src, title }) => {
  return (
    <div className="md:w-1/3 my-4 md:my-0">
      <img src={src} alt="no Image" className="w-full" />
      <div className="flex mt-4 justify-between items-center">
        <div>
          <h2 className="font-plusJakrta text-2xl"> {title}</h2>
          <span className="font-plusJakrta text-2xl">$39.00</span>
        </div>
        <span className="w-12 h-12 flex justify-center items-center rounded-full bg-primary-400">
          <RiShoppingCartFill />
        </span>
      </div>
    </div>
  );
};

export default NewArrivals;
