"use client";

import { Carousel, Layout, Typography } from "antd";
import { CSSProperties } from "react";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const contentStyle: CSSProperties = {
  height: "500px",
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url('/images/banner.jpg')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
  color: "#fff",
};

const overlayStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Layout>
      <Content style={{ padding: 0 }}>
        <Carousel autoplay>
          <div>
            <div style={contentStyle}>
              <div style={overlayStyle}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "90%",
                  }}
                >
                  <Title
                    style={{
                      color: "#fff",
                      fontWeight: "bolder",
                    }}
                  >
                    Welcome to Our Quiz Management Platform
                  </Title>
                  <Text style={{ color: "#fff", fontSize: "1.2rem" }}>
                    Elevate your learning experience with our interactive quiz
                    platform.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <div style={overlayStyle}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "80%",
                  }}
                >
                  <Title
                    style={{
                      color: "#fff",
                      fontWeight: "bolder",
                    }}
                  >
                    Challenge Your Knowledge, Unleash Your Potential
                  </Title>
                  <Text style={{ color: "#fff", fontSize: "1.2rem" }}>
                    Experience the thrill of learning through engaging quizzes.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </Content>
    </Layout>
  );
};

export default Banner;
