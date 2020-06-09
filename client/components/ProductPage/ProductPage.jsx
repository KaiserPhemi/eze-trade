// react libraries
import React, { useState, useEffect } from "react";

// third-party libraries
import Pagination from "react-js-pagination";

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
  const ITEMS_PER_PAGE = 12;
  const [responseObject, setResponse] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  /**
   * @desc makes API calls to get all request in the database
   */
  useEffect(() => {
    const getAllTradeRequest = async () => {
      const response = await fetch("http://localhost:5555/api/v1/requests");
      const devices = await response.json();
      const { sellRequests, buyRequests } = devices.allTradeRequests;
      setResponse([...buyRequests, ...sellRequests]);
      setTotalItems([...buyRequests, ...sellRequests].length);
    };
    getAllTradeRequest();
  }, []);

  /**
   * @desc handles pagination of content
   */
  const handlePagination = (pageNumber) => {
    setActivePage(pageNumber);

    // Logic for displaying todos
    const lastItemIndex = pageNumber * ITEMS_PER_PAGE;
    const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
    setCurrentItems(responseObject.slice(firstItemIndex, lastItemIndex));
  };

  return (
    <div className="product-section">
      <div className="section-side-bar">
        <ProductListSideBar />
      </div>
      <div className="item-list-wrapper">
        <div className="section-list">
          {currentItems && currentItems.length > 0 ? (
            currentItems.map((device) => {
              const {
                _id,
                name,
                imgUrl,
                status,
                storageSize,
                ...deviceGrade
              } = device;
              return (
                <ProductItem
                  key={_id}
                  name={name}
                  imgUrl={imgUrl}
                  grade={deviceGrade}
                  lockStatus={status}
                  storage={storageSize}
                  availableUnit={400}
                />
              );
            })
          ) : (
            <div>No items to display</div>
          )}
        </div>

        <Pagination
          activePage={activePage}
          totalItemsCount={totalItems}
          itemsCountPerPage={ITEMS_PER_PAGE}
          onChange={handlePagination}
          innerClass="list-pagination pagination"
        />
      </div>
    </div>
  );
};

export default ProductPage;
