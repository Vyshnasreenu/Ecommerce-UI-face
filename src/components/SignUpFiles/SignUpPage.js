import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const SignUpPage = ({ onClose, setChecking }) => {
  const [formHandler, setFormHandler] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
    if (isFlag) {
      sessionStorage.setItem("username", formHandler.userName);
      onClose();
      window.location.reload(false);
      setChecking(true);
    }
  };

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

  return (
    <div>
      <p>
        <h6>Already have an account ? Please Login</h6>
      </p>
      <Form layout="vertical" autoComplete="off" initialValues={formHandler}>
        <Form.Item
          label="User Name"
          className="mb-2"
          name="username"
          rules={[{ required: true, message: "Plase enter username" }]}
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
    </div>
  );
};

export default SignUpPage;
