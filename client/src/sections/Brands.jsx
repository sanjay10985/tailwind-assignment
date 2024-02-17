import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Brands = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollImages = (direction) => {
    const container = document.getElementById("brands-container");
    const scrollAmount = 300; // Adjust this value based on your preference

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    setScrollPosition(container.scrollLeft);
  };

  return (
    <section className="container w-full h-auto my-20 flex flex-col">
      <header className=" flex justify-between items-center">
        <div className="flex flex-col font-poppins justify-evenly">
          <h2 className="text-5xl font-bebasNeue">Our Trending brands</h2>
          <p className="font-plusJakrta">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at
            nunc elit in porttitor tortor nulla.
          </p>
        </div>
        <div className="flex gap-4 text-3xl">
          <FaLongArrowAltLeft onClick={() => scrollImages("left")} />
          <FaLongArrowAltRight onClick={() => scrollImages("right")} />
        </div>
      </header>
      <div
        id="brands-container"
        className="mt-16 w-full mx-auto flex items-end overflow-auto gap-16 scroll-smooth "
      >
        <img src="/brand1.png" className="w-1/10" />
        <img src="/brand2.png" className="w-1/10" />
        <img src="/brand3.png" className="w-1/10" />
        <img src="/brand4.png" className="w-1/10" />
        <img src="/brand5.png" className="w-1/10" />
        <img src="/brand1.png" className="w-1/10" />
        <img src="/brand2.png" className="w-1/10" />
        <img src="/brand3.png" className="w-1/10" />
        <img src="/brand4.png" className="w-1/10" />
        <img src="/brand5.png" className="w-1/10" />
        <img src="/brand4.png" className="w-1/10" />
        <img src="/brand5.png" className="w-1/10" />
        <img src="/brand1.png" className="w-1/10" />
        <img src="/brand2.png" className="w-1/10" />
        <img src="/brand3.png" className="w-1/10" />
        <img src="/brand4.png" className="w-1/10" />
        <img src="/brand5.png" className="w-1/10" />
      </div>
    </section>
  );
};

export default Brands;
