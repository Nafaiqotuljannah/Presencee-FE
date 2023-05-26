import React, { useState } from "react";
import { Carousel, Col, Row } from "antd";
import "./Features.css";
import { FAQ } from "./Constant";

const Features = () => {
  return (
    <>
      <div>
        <p className="title">Feature Yang Tersedia</p>
        <Row>
          <Col className="col1" span={3}></Col>
          <Col className="col2" xs={24} md={18} lg={18}>
            <div className="text-container1">
              <p className="text">Presensi Sidik Jari</p>
            </div>
            <div className="text-container2">
              <p className="text">Jadwal</p>
            </div>
            <div className="text-container3">
              <p className="text">Histori Presensi</p>
            </div>
            <div className="text-container4">
              <p className="text">Pesensi kamera</p>
            </div>
          </Col>
          <Col className="col3" span={3}></Col>
        </Row>
      </div>
      <div className="FAQ">
        <h1>Frequently Asked Questions (FAQ)</h1>
        <Row>
          <Col className="col1" span={3}></Col>
          <Col className="col2" xs={24} md={18} lg={18}>
            {FAQ.map((faq, index) => (
              <div key={index}>
                <div className={faq.className}>
                  <div className="cardfaq">
                    <img src={faq.bgimg} alt="gambar" />
                    <p>{faq.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Col>
          <Col className="col3" span={3}></Col>
        </Row>
      </div>
    </>
  );
};

export default Features;
