import React from "react";
import InfoText from "../InfoText";
import MainHeading from "../MainHeading";
import SubHeading from "../SubHeading";
const Component1 = () => {
  return (
    <div className="component-class comp-1">
      <MainHeading classAdd="main-head" data={"About Diana"} />
      <SubHeading data={"A platform that looks out for you"} />
      <InfoText
        data={
          "Diana empowers you to understand how your body works so you can look and feel your best. "
        }
      />
      <div className="seprator"></div>
      <MainHeading data={"Our Philosophy"} classAdd={"bold"} />
      <MainHeading data="Sustainable wellness is a big-picture, inside out approach" />
      <InfoText
        data={`Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. 

That’s why we’ve created an integrated ecosystem of: `}
        classAdd={"info-bold"}
      />
      <img src="tube.svg" className="img-page1 " alt="tube" />
      <img className="image-tubeinside img-page1 " src="tubeinsideimg.svg" />
      <img className="drop img-page1 " src="drop.svg" />
      <InfoText
        classAdd={"size-16px info"}
        data={
          "Consciously formulated products that deliver feel-good results fast"
        }
      />
      <img className="img-page1 img-page2" src="1stpagestar.svg" />
      <InfoText
        classAdd={"size-16px info"}
        data="In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body "
      />

      <img className="img-page1 img-page2" src="1stpagephone.svg" />
      <InfoText
        classAdd={"size-16px info"}
        data="In-app consultation portals that connect you with compassionate wellness
      experts "
      />
      <InfoText
        classAdd={"info-top-c1 size-16px info"}
        data="Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday."
      />
    </div>
  );
};

export default Component1;
