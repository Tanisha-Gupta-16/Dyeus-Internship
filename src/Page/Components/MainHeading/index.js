import React from "react";

const MainHeading = (props) => {
  const { data, classAdd } = props;
  return (
    <div className={classAdd ? "heading1 " + classAdd : "heading1"}>{data}</div>
  );
};

export default MainHeading;
