// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./_Common.scss";

/**
 * @desc reusable input field
 */
const Input = ({ placeHolder }) => {
  return <input className="default-input" placeholder={placeHolder} />;
};

// type checking
Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
};

export default Input;
