// react libraries
import React from "react";

// styles
import "./_ProductListSideBar.scss";

/**
 * @desc side bar on product listed
 */
const ProductPageSideBar = () => {
  return (
    <section className="side-bar-wrapper">
      <div className="side-bar-item category">
        <h4>Categories</h4>
        <ul>
          <li><a href="#">All</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">MacBook</a></li>
          <li><a href="#">AirPod</a></li>
          <li><a href="#">Samsung</a></li>
        </ul>
      </div>
      <div className="side-bar-item price-wrapper">
        <h4>Price Filter</h4>
        <input className="price-slider" type="range" />
      </div>
      <div className="side-bar-item storage-checklist">
        <h4>Storage</h4>
        <label htmlFor="size-32" className="storage-picker">
          <input id="size-32" type="checkbox" />
          <span>32GB</span>
        </label>
        <label htmlFor="size-64" className="storage-picker">
          <input id="size-64" type="checkbox" />
          <span>64GB</span>
        </label>
        <label htmlFor="size-128" className="storage-picker">
          <input id="size-128" type="checkbox" />
          <span>128GB</span>
        </label>
        <label htmlFor="size-256" className="storage-picker">
          <input id="size-256" type="checkbox" />
          <span>256GB</span>
        </label>
        <label htmlFor="size-512" className="storage-picker">
          <input id="size-512" type="checkbox" />
          <span>512GB</span>
        </label>
      </div>
    </section>
  );
};

export default ProductPageSideBar;
