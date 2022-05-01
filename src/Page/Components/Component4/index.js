import React from "react";
import InfoText from "../InfoText";
import MainHeading from "../MainHeading";
import SubHeading from "../SubHeading";

const Component4 = () => {
  return (
    <div className="component-class comp-4">
      <MainHeading data={"Track your mood"} classAdd={"bold"} />

      <InfoText
        data={`All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. `}
      />
      <button style={{ background: "#6E8CF6" }}>
        Track Your Mood On The App
      </button>
      <div className="flex-dir">
        <img width="45%" src="4thpage1.svg" />
        <img width="45%" src="4thpage2.svg" />
        <img width="45%" src="4thpage3.svg" />
        <img width="45%" src="4thpage4.svg" />
      </div>
    </div>
  );
};

export default Component4;
