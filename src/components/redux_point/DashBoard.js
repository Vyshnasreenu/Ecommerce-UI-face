import { Button, Card, Row, Col, Image, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { mobileProducts } from "./productsStore";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  addToCart,
  viewProductDet,
} from "../../Service/reducers/shoppingSlices";

const DashBoard = ({ products }) => {
  const dispatchHandler = useDispatch();

  return (
    <>
      <main className="mt-3" style={{ background: "" }}>
        {/* {loading && <Spin size='large' fullscreen tip="Loading...." />} */}

        <div className="m-2 p-2">
          <h4 className="text-left">Mobiles</h4>
          <div>
            <Row gutter={[16, 24]}>
              {mobileProducts.map((item, index) => (
                <Col
                  span={6}
                  key={item.id}
                  xs={24} // Full width on extra-small screens (mobile)
                  sm={10} // Two cards per row on small screens (tablets)
                  md={12} // Three cards per row on medium screens (small desktops)
                  lg={6} // Four cards per row on large screens
                >
                  <Link
                    to={`/product/${item.name}`}
                    className="text-decoration-none"
                  >
                    <Card
                      hoverable
                      className=""
                      style={{ height: "100%", width: "100%" }}
                      key={item.id}
                      onClick={() => dispatchHandler(viewProductDet(item))}
                    >
                      <div className="border-bottom">
                        <img
                          src={item.image}
                          height="130px"
                          className="mb-2 pt-2"
                        />
                      </div>
                      <div className="text-left my-2 px-2">
                        <h5>{item.name}</h5>
                        <label>Price</label> : {item.price}
                        <div className="">{item.description}</div>
                      </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashBoard;
