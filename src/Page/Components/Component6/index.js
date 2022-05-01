import React from "react";
import InfoText from "../InfoText";
import MainHeading from "../MainHeading";
import SubHeading from "../SubHeading";

const Component6 = () => {
  return (
    <div className="component-class comp-6">
      <MainHeading data={"Consult with wellness experts"} classAdd={"bold"} />

      <InfoText
        data={`Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.`}
      />
      <button style={{ background: "#6E8CF6" }}>Get a consultation</button>
      <img src="6thpageimg.svg" />
    </div>
  );
};

export default Component6;
