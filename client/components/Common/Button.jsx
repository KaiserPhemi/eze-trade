// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./_Common.scss";

/**
 * @desc default reusable button component
 */
const Button = ({ btnText }) => {
  return <button className="default-btn">{btnText}</button>;
};

// prop type checking
Button.propTypes = {
  btnText: PropTypes.string.string,
};

export default Button;
