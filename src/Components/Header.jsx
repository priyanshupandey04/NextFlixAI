import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return <div className="absolute z-10 w-full bg-gradient-to-b from-black to-transparent">
    <div className="w-48 ml-20">
      <img alt="Netflix Logo" src={NETFLIX_LOGO} />
    </div>
  </div>;
};

export default Header;
