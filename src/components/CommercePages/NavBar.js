import React, { useEffect, useState } from "react";
import "../cart.css";
import { Avatar, Badge, Button, Modal, Result } from "antd";
import { Link } from "react-router-dom";
import SignUpPage from "../CommercePages/SignUpFiles/SignUpPage";
import { useDispatch, useSelector } from "react-redux";

const NavBar = ({ isFlag }) => {
  const [checking, setChecking] = useState(false)

  const productState = useSelector((state) => state.shop)
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [userName, setUserName] = useState("");
  useEffect(() => {
    const name = sessionStorage.getItem("username");
    if (name !== null) {
      setUserName(name);
      setChecking(true);
    }
  }, []);

  const signUpHandler = () => {
    setIsSignUp(true);
  };

  const logoutHandler = () => {
    setIsLogin(true);
  };


  const removeAccountHandler = () => {
    sessionStorage.removeItem("username");
    window.location.reload(false);
  }


  return (
    <>
      <section className="parentNav">
        <article className="articleNav">
          <div className="p-3">
            <div className="col">
              <div className="row">
                <h3 className="col-md-6  text-left mt-2">
                  <span className="titleNav p-1 ">
                    <Link to="/" className="titleNav">
                      <i class="fa-brands fa-kickstarter fa-2xl mx-1"></i>
                      artZon
                    </Link>
                  </span>
                </h3>
                <div className="col-md-6 d-flex justify-content-end mt-3">
                  {!checking ? (
                    <h4>
                      <Button
                        variant="solid"
                        color=""
                        className="mr-3 p-3"
                        onClick={signUpHandler}
                      >
                        Sign Up
                        <i class="fa-solid fa-user fa-xl"></i>
                      </Button>
                    </h4>
                  ) : (
                    <div className="d-flex justify-content-end">
                      <div className="text-white mt-2 mr-2">
                        <span> Welcome{" "}</span>
                        <span
                          className="fw-bold"
                          style={{ fontSize: "", fontWeight: "bold" }}
                        >
                          {userName || ""} ,
                        </span>
                      </div>
                      <h4>
                        <Button
                          variant="solid"
                          color=""
                          className="mr-2"
                          onClick={logoutHandler}
                        >
                          Logout
                          <i class="fa-solid fa-user fa-xl"></i>
                        </Button>
                      </h4>

                      {isLogin && (
                        <Modal open={isLogin}
                          footer={null}
                          closable
                          onCancel={() => setIsLogin(false)}
                        >
                          <Result
                            status="warning"
                            title="Are you sure you want sign out?"
                            extra={[
                              <Button variant="solid" color="primary" onClick={removeAccountHandler}>Yes</Button>,
                              <Button variant="solid" color="danger" onClick={() => setIsLogin(false)}>No</Button>

                            ]}
                          />
                        </Modal>
                      )}
                    </div>
                  )}
                  {!isFlag ? (
                    <h4 className="">
                      <Link to='/productsStore'>
                        <Button
                          className="p-3 active"
                        >
                          Store
                          <Badge className='ml-' color='' count={productState.itemIncreament}>
                            <Avatar shape='square' size="small" icon={<i class="fa-solid fa-cart-shopping fa-md"></i>} />
                          </Badge>
                        </Button>
                      </Link>
                    </h4>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section >
      {
        isSignUp ? (
          <Modal
            open={isSignUp}
            footer={null}
            closable
            onCancel={() => setIsSignUp(false)}
          >
            <SignUpPage
              onClose={() => setIsSignUp(false)}
              setChecking={setChecking}
            />
          </Modal>
        ) : null
      }
    </>
  );
};

export default NavBar;
