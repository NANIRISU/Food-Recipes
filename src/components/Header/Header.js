import React from "react";
import "./header.css";


import NewHeader from "../newHeader/NewHeader";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>Book Library ... </h1>
      </div>

      <div className="icons-header">
      <NewHeader/>
        {/* <BsFillGridFill />
        <FiAlignCenter /> */}
       
       
        
      </div>
    </div>
  );
};

export default Header;
