import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { IMAGES } from "../../assets/constant";
import './loginDosen.css';

const LoginDosen = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div style={{ position: "relative", width: "1440px", height: "1024px", margin: "0 auto" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "200px 200px 0 0",
          borderColor: "#FE7968 transparent transparent transparent",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 0 200px 200px",
          borderColor: "transparent transparent #FE7968 transparent",
        }}
      />
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col span={8} style={{ marginRight: "90px", marginTop: "-300px" }}>
          <img src={IMAGES.logo1} alt="Your Image" style={{ width: "50%", marginBottom: "25px" }} />
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", textAlign: "justify" }}>
            Presensee merupakan sebuah attendance management
            system yang dapat mendata kehadiran seluruh mahasiswa dengan benar,
            dan membantu para dosen untuk melihat daftar kehadiran mahasiswa,
            yang dimana juga akan mengurangi banyaknya
            fenomena titip absen.
          </p>
        </Col>
        <Col
          span={7}
          style={{
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "25px",
            background: "#ffffff",
            borderRadius : "8px"
          }}
        >
          <Form name="login-form" onFinish={onFinish}>
            <Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]}>
              <Input placeholder="Input Email/NIM" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
              <Input.Password placeholder="Input Password" />
            </Form.Item>
           

            <Form.Item>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="link" style={{ color: "#FE9486" }}>Lupa Password</Button>
              </div>
            </Form.Item>
            <div className="garis" style={{ borderTop: "1px solid #ccc",  marginBottom: "20px " }} />

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: "100%", marginTop: "10px" }}>
                Login
              </Button>
            </Form.Item>
          
          </Form>
        </Col>
      </Row>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          width: "250px",
        }}
      >
        <img src={IMAGES.animasiLogin} alt="animasi login" style={{ width: "300%" }} />
      </div>
    </div>
  );
};

export default LoginDosen;
