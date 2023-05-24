import React from "react";
import { Carousel, Col, Row } from "antd";
import "./Features.css";
import { FAQ, FEATURES_CONTENT } from "./Constant";
import { IMAGES } from "../../../assets/constant";

const Features = () => {
  const responsiveSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // screens smaller than 768px will trigger this
        settings: {
          slidesToShow: 1,
          autoplay: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="title">
        <h1>Feature Yang Tersedia</h1>
        <Row align="middle">
          <Col className="col" xs={18} md={18} lg={18} span={6} offset={3}>
            <Carousel {...responsiveSettings}>
              {FEATURES_CONTENT.map((image, index) => (
                <div key={index}>
                  <div className="layouttext">
                    <img src={image.bgImage} alt="Gambar" />
                  </div>
                  <div className="titleimage">
                    <p>{image.title}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </div>
      <div className="FAQ">
        <h1>Frequently Asked Questions (FAQ)</h1>
        <Row align="middle">
          <Col className="col" xs={18} md={18} lg={18} span={6} offset={3}>
            <Carousel className="carousel" {...responsiveSettings}>
              {FAQ.map((faq, index) => (
                <div key={index}>
                  <div className="cardfaq">
                    <img src={faq.bgimg} alt="gambar" />
                    <p>{faq.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Features;
