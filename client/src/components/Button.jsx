import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = (props) => {
  return (
    <button className="w-40 font-bebasNeue text-xl h-14 bg-primary-500 text-white px-8 py-4 flex justify-between items-center">
      {props.name}{" "}
      <i>
        <FaLongArrowAltRight />
      </i>
    </button>
  );
};

export default Button;
