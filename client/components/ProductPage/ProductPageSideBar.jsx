// react libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

//  third-party libraries
import parseCSV from "papaparse";

// styles
import "./_ProductListSideBar.scss";

// components
import Button from "../Common/Button";
import HorizontalRule from "../Common/HorizontalRule";
import Input from "../Common/Input";

/**
 * @desc side bar on product listed
 */
const ProductPageSideBar = ({ setViewType }) => {
  const [selectedFile, setFile] = useState(null);
  const [requestType, setRequestType] = useState(null);

  /**
   * @desc sends data to the backend
   */
  const uploadData = async () => {
    const readData = new FileReader();
    await readData.readAsText(selectedFile);
    readData.onload = async (evt) => {
      let salesDataCSV = evt.target.result;
      let tradeData = parseCSV.parse(salesDataCSV, { header: true }).data;
      const reqData = { requestType, tradeData };
      const apiResponse = await fetch("http://localhost:5555/api/v1/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      });
      const { message } = await apiResponse.json();
      alert(message);
      location.reload();
    };
    setFile(null);
  };

  return (
    <section className="side-bar-wrapper">
      {/* Toggles products displayed i.e. sell requests or buy requests */}
      <div className="side-bar-item toggle-list-view">
        <h4>Select Trade Request to display.</h4>
        <div className="request-type-wrapper">
          <input
            id="all-requests"
            name="view-type"
            value="all"
            type="radio"
            onClick={(evt) => setViewType(evt)}
            defaultChecked
          />
          <label htmlFor="all-requests">All Requests</label>
        </div>
        <div className="request-type-wrapper">
          <input
            id="buy-requests"
            name="view-type"
            value="buy"
            type="radio"
            onClick={(evt) => setViewType(evt)}
          />
          <label htmlFor="buy-requests">Buy Requests</label>
        </div>
        <div className="request-type-wrapper">
          <input
            id="sell-requests"
            name="view-type"
            type="radio"
            onClick={(evt) => setViewType(evt)}
            value="sell"
          />
          <label htmlFor="sell-requests">Sell Requests</label>
        </div>
      </div>
      <HorizontalRule />

      {/* Upload new trade requests */}
      <div className="side-bar-item add-item-group">
        <h4>Upload Trade Request (.csv files only)</h4>
        <input
          accept=".csv"
          type="file"
          placeholder="Choose a .csv file to upload"
          onChange={(evt) => setFile(evt.target.files[0])}
        />
        <div className="radio-grp">
          <div className="request-type-wrapper">
            <input
              id="buy-request"
              name="request-type"
              value="buy"
              type="radio"
              onClick={(event) => setRequestType(event.target.value)}
            />
            <label htmlFor="buy-request">Buy Request</label>
          </div>
          <div className="request-type-wrapper">
            <input
              id="sell-request"
              name="request-type"
              type="radio"
              onClick={(event) => setRequestType(event.target.value)}
              value="sell"
            />
            <label htmlFor="sell-request">Sell Request</label>
          </div>
        </div>
        <Button
          disabled={`${requestType ? "" : "disabled"}`}
          btnText="load iphones"
          onClick={uploadData}
        />
      </div>
      <HorizontalRule />

      {/* List of product categories */}
      <div className="side-bar-item category">
        <h4>Categories</h4>
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">MacBook</a>
          </li>
          <li>
            <a href="#">AirPod</a>
          </li>
          <li>
            <a href="#">Samsung</a>
          </li>
        </ul>
      </div>
      <HorizontalRule />

      {/* Price selector */}
      <div className="side-bar-item price-wrapper">
        <h4>Price Filter</h4>
        {/* <input className="price-slider" type="range" />
         */}
        <div className="price-filter-wrapper">
          <Input placeHolder={"Min.Price"} />
          <Input placeHolder={"Max.Price"} />
        </div>
      </div>
      <HorizontalRule />

      {/* Storage size selector */}
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

// props type checking
ProductPageSideBar.propTypes = {
  itemList: PropTypes.func,
  setViewType: PropTypes.func,
};

export default ProductPageSideBar;
