// react libraries
import React, { useState, useEffect } from "react";

// styles
import "./_ProductPage.scss";

// components
import ProductItem from "./ProductItem";
import ProductListSideBar from "./ProductPageSideBar";

// utils
// import items from "../../utils/itemList";

/**
 * desc lists the products
 */
const ProductPage = () => {
  const [responseObject, getResponse] = useState(null);

  /**
   * @desc makes API calls to get all request in the database
   */
  useEffect(() => {
    const getAllTradeRequest = async () => {
      const response = await fetch("http://localhost:5555/api/v1/requests");
      const devices = await response.json();
      const { sellRequests, buyRequests } = devices.allTradeRequests;
      // console.log("buy req", buyRequests);
      getResponse([...buyRequests, ...sellRequests]);
    };
    getAllTradeRequest();
  }, []);
  console.log("all req", responseObject);
  return (
    <div className="product-section">
      <div className="section-side-bar">
        <ProductListSideBar />
      </div>
      <div className="section-list">
        {responseObject && responseObject.length > 0 ? (
          responseObject.map((device, index) => {
            return (
              <ProductItem
                key={index}
                name={device.device}
                imgUrl={device.imgUrl}
                grade={Object.keys(device) === "New"}
                lockStatus={device.status}
                storage={device.storageSize}
                unitPrice={device.New}
                availableUnit={400}
              />
            );
          })
        ) : (
          <div>No items to display</div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
