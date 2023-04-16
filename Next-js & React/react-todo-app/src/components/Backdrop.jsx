import React from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCancel} />;
};

export default Backdrop;
