import React from "react";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <section className="bg-primary-100 my-10">
      <div className="container pt-20">
        <header className="flex flex-col">
          <h2 className="text-5xl font-bebasNeue">
            our purpose is simple: to live and deliver WOW
          </h2>
          <p className="font-plusJakrta max-w-4xl my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            potenti sed lacus lectus. Tristique amet, ullamcorper quis feugiat
            at nulla. Erat elit turpis aliquam dictum ipsum lectus ornare est.
            Vitae, venenatis faucibus sagittis metus morbi. Massa pretium elit
            eget eget.
          </p>
          <p className="font-plusJakrta max-w-4xl mb-8  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            potenti sed lacus lectus. Tristique amet, ullamcorper quis feugiat
            at nulla. Erat elit turpis aliquam dictum ipsum lectus ornare est.
            Vitae, venenatis faucibus sagittis metus morbi. Massa pretium elit
            eget eget.
          </p>
          <Button name="KNOW MORE" />
        </header>
        <div className="flex flex-1 flex-row-reverse sm:flex-row items-end gap-4 mt-8">
          <img src="about1.png" className="md:h-auto w-6/12" />
          <img src="about2.png" className="w-6/12" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
