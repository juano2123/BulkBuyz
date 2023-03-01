import Search from "antd/es/transfer/search";
import LOGO from "../images/LOGO.png";
import React from "react";

const menuBar = () => {
  const onSearch = (value = "") => console.log(value);

  return (
    <div className="inicio">
      <header>
        <img className="logo" alt="logo" src={LOGO}></img>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </header>
    </div>
  );
};
export default menuBar;
