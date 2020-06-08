// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./_ProductItem.scss";

// components
import Button from "../Common/Button";

/**
 * @desc an item on the product list
 */
const ProductItem = ({
  name,
  availableUnit,
  grade,
  imgUrl,
  storage,
  unitPrice,
  lockStatus,
}) => {
  return (
    <div className="product-item">
      <div className="img-card">
        <img src={imgUrl} alt={`${name}_img`} />
        <div className="device-grade">
          <select id="grade" name="grade" className="grade-drop-down">
            <option value="new">New</option>
            <option value="a1">A1</option>
            <option value="a2">A2</option>
            <option value="b1">B1</option>
            <option value="b2">B2</option>
            <option value="c">C</option>
            <option value="cb">CB</option>
            <option value="cd">CD</option>
          </select>
        </div>
      </div>
      <div className="device-name">{name}</div>
      <div className="">
        <span>{lockStatus}</span>
        {" | "}
        <span>{storage}</span>
      </div>
      <div className="unit-price">
        <div>Unit Price</div>
        <div>{unitPrice}</div>
      </div>
      <div className="available-unit">
        <span>{availableUnit}</span>
        <span> Available</span>
      </div>
      <div className="btn-wrapper">
        <Button btnText={"buy"} />
      </div>
    </div>
  );
};

// prop type checking
ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  availableUnit: PropTypes.number.isRequired,
  grade: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
  unitPrice: PropTypes.string.isRequired,
  lockStatus: PropTypes.string.isRequired,
};

export default ProductItem;
