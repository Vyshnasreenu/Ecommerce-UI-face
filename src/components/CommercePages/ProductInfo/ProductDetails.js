import { Button, Card, Col, Image, Row, } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ProductSpec from "../ProductInfo/ProductSpec";
import { addToCart } from "../../../Service/reducers/shoppingSlices";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  let navgiation = useNavigate("")

  const prodcutDetails = useSelector((state) => state.shop?.prodcutDetails)
  const dispatch = useDispatch()


  const onMsgShower = () => {
    dispatch(addToCart(prodcutDetails))
    navgiation("/productsStore")
  };



  return (
    <div className="m-3">
      {/* {loading && <Spin size='large' fullscreen tip="Loading...." />} */}
      <Row gutter={[24, 16]}>
        <Col
          span={24}
          xs={24} // Full width on extra-small screens (mobile)
          sm={12} // Two cards per row on small screens (tablets)
          md={24} // Three cards per row on medium screens (small desktops)
          lg={24} // Four cards per row on large screens
        >
          <Card>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-md-4 border-right" style={{ border: "" }}>
                    <Image.PreviewGroup items={prodcutDetails.images}>
                      <Image
                        src={prodcutDetails?.image}
                        height={window.innerWidth > 760 ? "500px" : "250px"}
                        width="100%"
                        className="mb-2 border-bottom"
                      />
                    </Image.PreviewGroup>
                  </div>
                  <div className="text-left my-2 px-2 col-md-6">
                    <h5>{prodcutDetails?.name}</h5>
                    <label>Price</label> : {prodcutDetails?.price}
                    <div className="">{prodcutDetails?.moreInfo}</div>
                    <div className="row p-3">
                      {/* <Link> */}
                      <Button
                        className="bg-warning mx-2"
                        color="default"
                        variant="solid"
                        onClick={onMsgShower}
                      >
                        Add To Cart
                      </Button>
                      {/* </Link> */}
                      <Button
                        color="primary"
                        variant="solid"
                        onClick={onMsgShower}
                      >
                        Buy Now
                      </Button>
                    </div>
                    <ProductSpec />
                  </div>
                </div>
              </div>
            </div>
            {/* {flag && (
              <Modal
                open={flag}
                footer={null}
                closable
                onCancel={() => setFlag(false)}
              >
                <Result
                  status="404"
                  subTitle="Sorry!, You must be logged in to view this page. Please Login to see the items you added previously."
                  // title="Your Card Is empty, Missing Cart items?"
                />
              </Modal>
            )} */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
