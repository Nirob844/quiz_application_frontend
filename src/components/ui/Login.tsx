"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/login.png";

type formValues = {
  email: string;
  password: string;
};

const LoginPageComponent = () => {
  const onSubmit: SubmitHandler<formValues> = async (data: formValues) => {};

  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        minHeight: "100vh",
      }}
    >
      <Col
        sm={12}
        md={10}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={loginImage} width={700} alt="Login image" />
      </Col>
      <Col sm={12} md={8}>
        <h1
          style={{
            marginBottom: "1rem",
          }}
        >
          Login here
        </h1>
        <div>
          <Form
            submitHandler={onSubmit}
            // defaultValues={{ email: "admin@admin.com", password: "123456" }}
          >
            <div>
              <FormInput
                name="email"
                label="User Email"
                type="text"
                size="large"
                placeholder="admin@admin.com"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                label="Password"
                type="password"
                size="large"
                placeholder="123456"
              />
            </div>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Login
            </Button>
          </Form>
          <p style={{ marginTop: "35px", textAlign: "center" }}>
            Not registered yet ? <Link href="/register">registration here</Link>{" "}
            or go to <Link href="/">Home</Link>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPageComponent;
