// react libraries
import React from "react";

// styles
import "./_Banner.scss";

// components
import Button from "../Common/Button";
import Input from "../Common/Input";

// utils
import { BANNER_TEXT, INPUT_TEXT } from "../../utils/constants";

/**
 * @desc
 */
const Banner = () => {
  return (
    <div className="page-banner">
      <div className="left-banner-item">
        <p className="banner-text">{BANNER_TEXT}</p>
        <form className="search-field-form">
          <Input placeHolder={INPUT_TEXT} />
          <Button btnText="search" />
        </form>
      </div>
      <div className="right-banner-item">
        <img
          src="https://drive.google.com/uc?export=view&id=1CV3HsyA0RuoHnIDCnhnhw1mAMimPzymg"
          alt="banner_img"
        />
      </div>
    </div>
  );
};

export default Banner;
