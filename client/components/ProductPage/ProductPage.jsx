// react libraries
import React from "react";

// styles
import "./_ProductPage.scss";

// components
import ProductItem from "./ProductItem";
import ProductListSideBar from "./ProductPageSideBar";

// utils
import items from "../../utils/itemList";

/**
 * desc lists the products
 */
const ProductPage = () => {
  const iDevice = {
    name: "iPhone XR",
    imgUrl:
      "https://drive.google.com/uc?export=view&id=1QDH8rDZMeYNP9AC8EHD1cfV9-DpKxy2o",
    grade: "a1",
    lockStatus: "Unlocked",
    storage: "256GB",
    unitPrice: 600,
    availableUnit: 1500,
  };
  return <div className="product-section">
    <div className="section-side-bar"><ProductListSideBar /></div>
    <div className="section-list">
      {items && items.map((device, index) => (
        <ProductItem
          key={index}
          name={device.name}
          imgUrl={device.imgURL}
          grade={device.grade}
          lockStatus={device.lockStatus}
          storage={device.storage}
          unitPrice={device.unitPrice}
          availableUnit={device.availableUnit}
        />
      ))}
    </div>
  </div>;
};

export default ProductPage;
