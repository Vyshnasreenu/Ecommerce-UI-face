import React, { useEffect } from "react";

import Home from "../components/redux_point/Home";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ProductDetails from "../components/redux_point/ProductDetails";
import NavBar from "../components/redux_point/NavBar";
import ScrollToTop from "./ScrollTop";

const HomeContainer = ({}) => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:index"
            element={
              <>
                <NavBar />
                <ProductDetails />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomeContainer;
