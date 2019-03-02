import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "./img/product-1.png";
import photo2 from "./img/product-2.png";
import photo3 from "./img/product-3.png";
import photo4 from "./img/product-4.png";
import photo5 from "./img/product-5.png";
import photo6 from "./img/product-6.png";

export default class Product extends Component {
  render() {
    var settings = {
      centerMode: true,
      centerPadding: "100px",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <React.Fragment>
        <BestSellerTitle className="best-seller">Best sellers</BestSellerTitle>
        <Slider {...settings}>
          <Card className="photo-card">
            <img src={photo1} alt="1" />
            <CardName>iPhoneX</CardName>
          </Card>
          <Card className="photo-card">
            <img src={photo2} alt="1" />
            <CardName>iPhoneX</CardName>
          </Card>
          <Card className="photo-card">
            <img src={photo3} alt="1" />
            <CardName>iPhoneX</CardName>
          </Card>
          <Card className="photo-card">
            <img src={photo4} alt="1" />
            <CardName>iPhoneX</CardName>
          </Card>
          <Card className="photo-card">
            <img src={photo5} alt="1" />
            <CardName>iPhoneX</CardName>
          </Card>
          <Card className="photo-card">
            <img src={photo6} alt="1" />
            <CardName>iPhoneX</CardName>
          </Card>
        </Slider>
      </React.Fragment>
    );
  }
}

const BestSellerTitle = styled.h3`
  font-family: "Prompt", sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 2.5rem;
  line-height: 3.6rem;
`;

const Card = styled.div`
  // box-shadow: 0 20px 50px rgb(0, 0, 0, .5);
  padding: 3rem 0 4rem 0;
  z-index: 1;
  background-color: transparent;
`;

const CardName = styled.h2`
  text-align: center;
  margin-top: 2rem;
`;
