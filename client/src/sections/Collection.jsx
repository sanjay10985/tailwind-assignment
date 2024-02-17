import React from "react";

const Collection = () => {
  return (
    <section className=" container flex flex-col my-16 gap-4">
      <header className="flex h-24 flex-col justify-around ">
        <h2 className="text-5xl font-bebasNeue">2022 COLLECTION</h2>
        <p className="font-plusJakrta">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at nunc
          elit in porttitor tortor nulla.
        </p>
      </header>
      <div className="flex justify-between md:flex-row mt-10 flex-col flex-1 gap-4">
        <CollectionItem src="/collection1.png" title="_FOR MEN" />
        <CollectionItem src="/collection2.png" title="_FOR WOMEN" />
      </div>
    </section>
  );
};

const CollectionItem = ({ src, title }) => {
  return (
    <div className=" md:w-6/12 relative">
      <img src={src} alt="no Image" />
      <h2 className="absolute bottom-5 left-5 font-plusJakrta font-bold text-3xl">
        {" "}
        {title}
      </h2>
    </div>
  );
};

export default Collection;
