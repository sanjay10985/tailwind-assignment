import React from "react";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="container flex items-center px-8 py-4 m-8 justify-between bg-white w-xl h-20 font-plusJakrta">
      <NavList className="hidden">
        <NavItem>Stories</NavItem>
        <NavItem className="border-r-2 border-l-2 p-4">New In</NavItem>
        <NavItem> All Products</NavItem>
      </NavList>
      <img className="w-20 h-auto" src="Logo.png" alt="Logo" />
      <NavList className="hidden">
        <NavItem>Search</NavItem>
        <NavItem className="border-r-2 border-l-2 p-4">Wishlist</NavItem>
        <NavItem> Cart(0)</NavItem>
      </NavList>
      <CiMenuFries className="sm:hidden block text-4xl" />
    </nav>
  );
};

const NavList = (props) => {
  const className = ` ${props.className || ""}`;
  return (
    <ul className={`${className} h-full sm:flex gap-5 items-center`}>
      {props.children}
    </ul>
  );
};

const NavItem = (props) => {
  const className = `${props.className || ""}`;
  return <li className={className}>{props.children}</li>;
};

export default Navbar;
