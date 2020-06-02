// react libraries
import React from "react";

// styles
import "./_Common.scss";

/**
 * @desc default reusable button component
 */
const Button = ({ btnText }) => {
  return <button className="default-btn">{btnText}</button>;
};

export default Button;
