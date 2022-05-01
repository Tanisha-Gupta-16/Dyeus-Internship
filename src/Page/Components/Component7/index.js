import React from "react";
import InfoText from "../InfoText";
import MainHeading from "../MainHeading";
import SubHeading from "../SubHeading";

const Component7 = () => {
  return (
    <div className="component-class comp-7">
      <MainHeading
        data={"Get your personalized period box"}
        classAdd={"bold"}
      />

      <img src="pmsbox.svg" />
      <InfoText
        data={`Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. `}
      />
      <button style={{ background: "#000" }}>Create your box on the app</button>
    </div>
  );
};

export default Component7;
