"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useUserRegisterMutation } from "@/redux/api/authApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import registrationImage from "../../assets/registration.png";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegistrationPageComponent = () => {
  const [userRegister] = useUserRegisterMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const { confirmPassword, ...newData } = data;

    if (newData.password !== confirmPassword) {
      message.error("Password and Confirm Password do not match.");
      return;
    }

    try {
      const res = await userRegister(newData).unwrap();
      console.log(res);
      if (!!res) {
        router.push("/login");
        message.success("register in successfully!! please login");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        <Image
          src={registrationImage}
          width={500}
          alt="Registration image"
          style={{ maxWidth: "100%" }}
        />
      </Col>
      <Col sm={12} md={8}>
        <h1
          style={{
            marginBottom: "1rem",
          }}
        >
          Registration
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <Row gutter={[10, 10]}>
              <Col span={24}>
                <FormInput
                  name="fullName"
                  label="Full Name"
                  type="text"
                  size="large"
                />
              </Col>

              <Col span={24}>
                <FormInput
                  name="email"
                  label="User Email"
                  type="text"
                  size="large"
                />
              </Col>

              <Col span={24}>
                <FormInput
                  name="password"
                  label="Password"
                  type="password"
                  size="large"
                />
              </Col>

              <Col span={24}>
                <FormInput
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  size="large"
                />
              </Col>
            </Row>

            <Button
              type="primary"
              htmlType="submit"
              style={{ marginTop: "16px" }}
            >
              Register
            </Button>
          </Form>

          <p style={{ marginTop: "35px", textAlign: "center" }}>
            Already registered ? <Link href="/login">Login here</Link> or go to{" "}
            <Link href="/">Home</Link>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default RegistrationPageComponent;
