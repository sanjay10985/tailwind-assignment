import React from "react";

const Inspiration = () => {
  return (
    <section className="w-full flex flex-col my-4">
      <header className="container my-8 flex justify-between items-center">
        <h2 className="text-5xl font-bebasNeue">Visit our Instagram</h2>
        <span className="font-poppins">@tomarsanjay.13</span>
      </header>
      <div className="flex justify-between">
        <img src="inspiration1.png" className="w-3/12 p-2" />
        <img src="inspiration2.png" className="w-3/12 p-2" />
        <img src="inspiration3.png" className="w-3/12 p-2" />
        <img src="inspiration4.png" className="w-3/12 p-2" />
      </div>
    </section>
  );
};

export default Inspiration;
