import React from "react";
import InfoText from "../InfoText";
import MainHeading from "../MainHeading";

const Component2 = () => {
  return (
    <div className="component-class comp-2">
      <MainHeading data={"What makes us different?"} classAdd={"bold"} />

      <MainHeading data={"Reimagining and rewiring self-care"} />
      <InfoText
        data={`You care about conscious consumption, and so do we. \

When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best 

We collaborate with researchers and doctors to 

Help you get granular about your health and self-care with personalized insights, and

 Equip you with simple, sustainable products that get the job done

No to-the-moon-and-back claims in this neck of the woods.

We’re just solving real problems for real people here. 
`}
      />
    </div>
  );
};

export default Component2;
