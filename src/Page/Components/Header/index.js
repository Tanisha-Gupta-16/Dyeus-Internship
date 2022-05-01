import React from "react";
const Header = () => {
  return (
    <div className="header">
      <img src="cart.svg" />
      <div style={{ display: "flex" }}>
        <img src="menubar.svg" />
        <img style={{ paddingLeft: "10px" }} src="notification.svg" />
      </div>
    </div>
  );
};

export default Header;
