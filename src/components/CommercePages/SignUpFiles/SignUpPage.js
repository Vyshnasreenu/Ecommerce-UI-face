import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUpPage = ({ onClose, setChecking }) => {
  const [formHandler, setFormHandler] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [form] = Form.useForm();

  const [isLogin, setIsLogin] = useState(false);
  // const [isR, setisR] = useState(false)

  // const [isData, setIsData] = useState("");
  const formSubmitHandler = () => {
    let isFlag = true;
    if (formHandler.userName === "" || formHandler.userName === null) {
      isFlag = false;
    }
    if (formHandler.email === "" || formHandler.email === null) {
      isFlag = false;
    }
    if (formHandler.password === "" || formHandler.password === null) {
      isFlag = false;
    }
    if (
      formHandler.confirmPassword === null ||
      formHandler.confirmPassword === ""
    ) {
      isFlag = false;
    }
    if (formHandler.password !== formHandler.confirmPassword) {
      isFlag = false;
    }
    if (isFlag) {
      // setIsSuccess(true)
      sessionStorage.setItem("username", formHandler.userName);
      localStorage.setItem("useremail", formHandler.email);
      onClose();
      toast("SignUp successfully!!")
      setTimeout(() => {
        window.location.reload(false);
      }, [2000])
      setChecking(true);
    }
  };

  const onLoginHandler = () => {
    let isFlag = true;
    if (formHandler.userName === "" || formHandler.userName === null) {
      isFlag = false;
    }
    if (formHandler.password === "" || formHandler.password === null) {
      isFlag = false;
    }

    if (isFlag) {
      sessionStorage.setItem("username", formHandler.userName);
      onClose();
      toast("Login successfully!!")
      setTimeout(() => {
        window.location.reload(false);
      }, [2000])
      setChecking(true);
    }
  }

  const changHandler = (event, name) => {
    setFormHandler({
      ...formHandler,
      [event.target.name]:
        name === "userName"
          ? event.target.value?.toUpperCase()
          : event.target.value,
    });
    // console.log(event.target.value.toUpperCase());
  };

  const onLoginClcik = () => {
    setIsLogin(true)
    form.resetFields();
  }

  const onSignupClick = () => {
    setIsLogin(false)
    form.resetFields();
  }

  return (
    <div>
      <p>
        {!isLogin ? (
          <h6>Already have an account ? Please
            <Button variant="text" className="" color="primary" onClick={onLoginClcik}>
              Login
            </Button>
          </h6>
        ) : (
          <Button variant="text" className="" color="primary" onClick={onSignupClick}>
            Sign Up
          </Button>
        )}
      </p>
      {!isLogin ? (
        <Form layout="vertical" autoComplete="off" initialValues={formHandler} form={form}>
          <Form.Item
            label="User Name"
            className="mb-2"
            name="username"
            rules={[{ required: true, message: "Please enter username" }]}
          >
            <Input
              size="large"
              name="userName"
              value={formHandler.userName}
              onChange={(event) => changHandler(event, "userName")}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            className="mb-2"
            rules={[
              {
                type: "email",
                required: true,
                message: "Email is not valid email",
              },
            ]}
          >
            <Input
              size="large"
              value={formHandler.email}
              name="email"
              onChange={changHandler}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="mb-2"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              value={formHandler.password}
              onChange={changHandler}
              name="password"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            className="mb-2"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              name="confirmPassword"
              value={formHandler.confirmPassword}
              onChange={changHandler}
            />
          </Form.Item>
          <Form.Item className="text-center m-auto">
            <Button
              className=""
              variant="solid"
              color="default"
              htmlType="submit"
              onClick={formSubmitHandler}
            >
              {" "}
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form layout="vertical" autoComplete="off" initialValues={formHandler} form={form}>
          <Form.Item
            label="User Name"
            className="mb-2"
            name="username"
            rules={[{ required: true, message: "Please enter username" }]}
          >
            <Input
              size="large"
              name="userName"
              value={formHandler.userName}
              onChange={(event) => changHandler(event, "userName")}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="mb-2"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              value={formHandler.password}
              onChange={changHandler}
              name="password"
            />
          </Form.Item>
          <Form.Item className="text-center m-auto">
            <Button
              className=""
              variant="solid"
              color="default"
              htmlType="submit"
              onClick={onLoginHandler}
            >
              {" "}
              Login
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default SignUpPage;
