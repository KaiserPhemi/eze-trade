// react libraries
import React, { useState, useEffect } from "react";

// third-party libraries
import Pagination from "react-js-pagination";

// styles
import "./_ProductPage.scss";

// components
import ProductItem from "./ProductItem";
import ProductListSideBar from "./ProductPageSideBar";

/**
 * desc lists the products
 */
const ProductPage = () => {
  const ITEMS_PER_PAGE = 12;
  const [responseObject, setResponse] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [sellRequests, setSellRequests] = useState([]);
  const [buyRequests, setBuyRequests] = useState([]);
  const [viewType, setViewType] = useState(null);

  /**
   * @desc makes API calls to get all request in the database
   */
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5555/api/v1/requests");
      const devices = await response.json();
      const { sellRequests, buyRequests } = devices.allTradeRequests;
      setSellRequests([...sellRequests]);
      setBuyRequests([...buyRequests]);
      await setResponse([...buyRequests, ...sellRequests]);
      await setTotalItems([...buyRequests, ...sellRequests].length);
    })();
  }, []);

  /**
   * @desc handles pagination of content
   */
  const handlePagination = (pageNumber) => {
    setActivePage(pageNumber);
    const lastItemIndex = pageNumber * ITEMS_PER_PAGE;
    const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
    setCurrentItems(responseObject.slice(firstItemIndex, lastItemIndex));
  };

  /**
   * @desc handles
   * @param {object} evt
   */
  const handleViewType = (evt) => {
    setViewType(evt.target.value);

    switch (viewType) {
      case "buy":
        setCurrentItems([...buyRequests]);
        break;
      case "sell":
        setCurrentItems([...sellRequests]);
        break;
    }
  };

  return (
    <div className="product-section">
      <div className="section-side-bar">
        <ProductListSideBar setViewType={handleViewType} />
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
        />
      </div>
    </div>
  );
};

export default ProductPage;
