import React from "react";
import InfoText from "../InfoText";
import MainHeading from "../MainHeading";
import SubHeading from "../SubHeading";

const Component5 = () => {
  return (
    <div className="component-class comp-5">
      <MainHeading data={"Track your period"} classAdd={"bold"} />

      <InfoText
        data={`Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. `}
      />
      <button style={{ background: "#F66E6E" }}>
        Track your period on the app
      </button>
      <img src="5thpageimg.svg" />
    </div>
  );
};

export default Component5;
