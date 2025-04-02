import React, { useEffect } from "react";

import Home from "../components/CommercePages/Home";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ProductDetails from "../components/CommercePages/ProductDetails";
import NavBar from "../components/CommercePages/NavBar";
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
