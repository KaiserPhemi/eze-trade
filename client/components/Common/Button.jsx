// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./_Common.scss";

/**
 * @desc default reusable button component
 */
const Button = ({ btnText, onClick, disabled }) => {
  return (
    <button className="default-btn" onClick={onClick} disabled={disabled}>
      {btnText}
    </button>
  );
};

// prop type checking
Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.string,
};

export default Button;
