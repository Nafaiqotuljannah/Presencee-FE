import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { IMAGES } from '../../assets/constant';
import './loginAdmin.css';

const LoginAdmin = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login-container">
      <div className="triangle-top-left" />
      <div className="triangle-bottom-right" />
      <Row justify="center" align="middle" className="login-section">
        <Col span={8} className="login-content">
          <img src={IMAGES.logo1} alt="Your Image" className="logo-image" />
          <p>
            Presensee merupakan sebuah attendance management system yang dapat mendata kehadiran seluruh mahasiswa dengan benar, dan membantu para dosen untuk melihat daftar kehadiran mahasiswa, yang dimana juga akan mengurangi banyaknya
            fenomena titip absen.
          </p>
        </Col>
        <Col
          span={8}
          style={{
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            padding: '24px',
            background: '#ffffff',
          }}
        >
          <Form name="login-form" onFinish={onFinish}>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="Input Email/NIM" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password placeholder="Input Password" />
            </Form.Item>
            <div style={{ borderTop: '1px solid #ccc', margin: '12px 0' }} />
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Enter
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <img src={IMAGES.animasiLogin} alt="animasi login" className="login-animation" />
    </div>
  );
};

export default LoginAdmin;
