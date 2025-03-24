import React, { useEffect, useState } from "react";
import shopStyle from "../cart.css";
import { useSelector } from "react-redux";
import { Avatar, Badge, Button, Modal, Result } from "antd";
import { Link } from "react-router-dom";
import SignUpPage from "../SignUpFiles/SignUpPage";
import Login from "../SignUpFiles/Login";

const NavBar = () => {
  // const storeField = useSelector((state) => state.details.storeField);
  const [storeflag, setStoreFlag] = useState(false);
  const [checking, setChecking] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [userName, setUserName] = useState("");
  useEffect(() => {
    const name = sessionStorage.getItem("username");
    // console.log(username, "userma");
    if (name !== null) {
      setUserName(name);
      setChecking(true);
    }
  }, []);

  const signUpHandler = () => {
    setIsSignUp(true);
    // window.location.reload(false);
  };

  const logoutHandler = () => {
    setIsLogin(true);
    sessionStorage.removeItem("username");
    window.location.reload(false);
  };
  return (
    <>
      <section className="parentNav">
        <article className="articleNav">
          <div className="p-3">
            <div className="col">
              <div className="row">
                <h3 className="col-md-6 text-left mt-2">
                  <span className="titleNav p-1 ">
                    <Link to="/" className="titleNav">
                      <i class="fa-brands fa-kickstarter fa-2xl mx-1"></i>
                      artZon
                    </Link>
                  </span>
                </h3>

                {/* <div className='col-md-4 text-right'>
                                </div> */}
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
                    <>
                      <div className="text-white">
                        Welcome{" "}
                        <span
                          className="fs-3 fw-bold"
                          style={{ fontSize: "24px", fontWeight: "bold" }}
                        >
                          {userName || ""}
                        </span>
                      </div>
                      <h4>
                        <Button
                          variant="solid"
                          color=""
                          className="mr-3 p-3"
                          onClick={logoutHandler}
                        >
                          Logout
                          <i class="fa-solid fa-user fa-xl"></i>
                        </Button>
                      </h4>
                      {/* <Button
                        variant="solid"
                        color=""
                        className="mr-3 p-3"
                        onClick={setIsLogin}
                      >
                        Sign Out
                        <i class="fa-solid fa-user fa-xl"></i>
                      </Button> */}
                    </>
                  )}
                  <h4>
                    {/* <Link to='/' className='titleNav'> */}
                    {/* <Button
                      className="p-3"
                      variant="solid"
                      onClick={() => {
                        setStoreFlag(true);
                      }}
                    >
                      Store */}
                    {/* <Badge count={itemCount || 0} className='ml-2' color=''>
                                                <Avatar shape='square' size="large" icon={
                                                    } />
                                                    </Badge> */}
                    {/* <i class="fa-solid fa-cart-shopping fa-xl"></i>
                    </Button> */}
                    {/* </Link> */}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {storeflag && (
        <Modal
          open={storeflag}
          footer={null}
          closable
          onCancel={() => setStoreFlag(false)}
        >
          <Result
            status="404"
            subTitle="Sorry!, This page is currently under development...."
            title="404"
          />
        </Modal>
      )}
      {isSignUp ? (
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
      ) : null}

      {/* {isLogin && (
        <Modal
          open={isLogin}
          footer={null}
          closable
          onCancel={() => setIsLogin(false)}
        >
          <Login />
        </Modal>
      )} */}
    </>
  );
};

export default NavBar;
