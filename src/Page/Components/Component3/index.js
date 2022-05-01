import React from "react";
import InfoText from "../InfoText";
import MainHeading from "../MainHeading";
import SubHeading from "../SubHeading";

const Component3 = () => {
  return (
    <div className="component-class comp-3">
      <div>
        <MainHeading
          data={"Liberate your everyday wellness"}
          classAdd={"bold"}
        />

        <MainHeading data={"Shop our self-care products"} />
        <InfoText
          data={`Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.`}
        />
        <button className="bg-F66E6E">Upgrade Your Self Care</button>
        <SubHeading data="#NoNasties, we promise!" />
      </div>
      <img src="bottlepic.svg" />
    </div>
  );
};

export default Component3;
