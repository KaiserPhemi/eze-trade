// react libraries
import React from "react";

// styles
import "./_ProductItem.scss";

// components
import Button from "../Common/Button";

/**
 * @desc an item on the product list
 */
const ProductItem = (
  { name, availableUnit, grade, imgUrl, storage, unitPrice, lockStatus },
) => {
  return (
    <div className="product-item">
      <div className="img-card">
        <img src={imgUrl} alt={`${name}_img`} />
        <div className="device-grade">{grade}</div>
      </div>
      <div className="device-name">{name}</div>
      <div className="">
        <span>{lockStatus}</span>
        {" | "}
        <span>{storage}</span>
      </div>
      <div className="unit-price">
        <div>Unit Price</div>
        <div>{"$"}{unitPrice}</div>
      </div>
      <div className="available-unit">
        <span>{availableUnit}</span>
        <span>{" "}Available</span>
      </div>
      <div className="btn-wrapper">
        <Button btnText={"buy"} />
      </div>
    </div>
  );
};

export default ProductItem;
