// react libraries
import React, { useState } from "react";
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
  lockStatus,
}) => {
  // state
  const [itemPrice, setPrice] = useState(grade["New"]);

  /**
   * @desc handles on change event on select tag
   */
  const handleItemSelection = () => {
    if (event.target.value in grade) {
      setPrice(grade[event.target.value]);
    }
  };

  return (
    <div className="product-item">
      <div className="img-card">
        <img src={imgUrl} alt={`${name}_img`} />
        <div className="device-grade">
          <select
            id="grade"
            name="grade"
            className="grade-drop-down"
            onChange={handleItemSelection}
          >
            <option value="New">New</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C">C</option>
            <option value="CB">CB</option>
            <option value="CD">CD</option>
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
        <div>{itemPrice}</div>
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
  grade: PropTypes.object.isRequired,
  imgUrl: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
  lockStatus: PropTypes.string.isRequired,
};

export default ProductItem;
