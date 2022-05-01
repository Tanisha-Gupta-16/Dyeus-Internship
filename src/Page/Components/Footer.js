import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <img style={{ paddingLeft: "10px" }} src="facebook.svg" />
        <img src="facebook.svg" />
      </div>
      <div className="f-item">
        Products{" "}
        <span style={{ paddingLeft: "10px" }}>
          <img src="arrow.svg"></img>
        </span>
      </div>

      <div className="f-item">
        Our Science
        <span style={{ paddingLeft: "10px" }}>
          <img src="arrow.svg"></img>
        </span>
      </div>

      <div className="f-item">
        Vision and Mission
        <span style={{ paddingLeft: "10px" }}>
          <img src="arrow.svg"></img>
        </span>
      </div>
      <div className="f-item">
        About Us
        <span style={{ paddingLeft: "10px" }}>
          <img src="arrow.svg"></img>
        </span>
      </div>
      <div className="seprator-white"></div>
      <label style={{ textAlign: "initial" }} for="email">
        Subscribe to our newsletter
      </label>

      <input type="text" id="email" placeholder="Enter your email" />
      <input
        style={{ marginBottom: "20px" }}
        type="button"
        id="button"
        value="Subscribe"
      />
    </div>
  );
};

export default Footer;
