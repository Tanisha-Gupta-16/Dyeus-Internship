import React from "react";

const InfoText = (props) => {
  return (
    <div className={props.classAdd ? props.classAdd : "info"}>{props.data}</div>
  );
};
export default InfoText;
