// react libraries
import React from "react";

// components
import Banner from "../Banner/Banner";
import ProductPage from "../ProductPage/ProductPage";

// styles
import "./App.scss";

/**
 * @desc
 */
const App = () => {
  return (
    <div className="app-page">
      <Banner />
      <ProductPage />
    </div>
  );
};

export default App;
