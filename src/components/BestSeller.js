import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { CardButton } from "./css/CardButton";
import { BestSellerTitle } from "./css/BestSellerTitle";
import { BestSellerCard } from "./css/BestSellerCard";
import { BestSellerName } from "./css/BestSellerName";
import { BestSellerImage } from "./css/BestSellerImage";
import "./css/BestSeller.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import note9 from "./img/galaxynote9.png";
import pixel3xl from "./img/pixel3xl.png";
import iphonexsmax from "./img/iphonexsmax.png";
import iphonexr from "./img/iphonexr.png";
import galaxys10 from "./img/galaxys10.png";
import iphone7 from "./img/iphone7.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(250,250,250)" }}
      onClick={onClick}
    />
  );
}

function PreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(250,250,250)" }}
      onClick={onClick}
    />
  );
}

export default class Product extends Component {
  render() {
    var settings = {
      dots: true,
      centerMode: true,
      centerPadding: "0rem",
      slidesToShow: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 2
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
        <BestSellerTitle className="best-seller">Best Sellers</BestSellerTitle>
        <Slider {...settings}>
          <BestSellerCard className="photo-card">
            <BestSellerImage src={note9} alt="1" />
            <hr className="phone-hr" />
            <BestSellerName>
              Samsung <br /> Galaxy Note 9
            </BestSellerName>
            <p>Starting at $29.89/mo. or $699</p>
            <CardButton>Learn more</CardButton>
          </BestSellerCard>
          <BestSellerCard className="photo-card">
            <BestSellerImage src={pixel3xl} alt="Pixel 3 XL" />
            <hr className="phone-hr" />
            <BestSellerName>
              Google <br /> Pixel 3 XL
            </BestSellerName>
            <p>Starting at $34.19/mo. or $819</p>
            <CardButton>Learn more</CardButton>
          </BestSellerCard>
          <BestSellerCard className="photo-card">
            <BestSellerImage src={iphonexsmax} alt="iPhone XS Max" />
            <hr className="phone-hr" />
            <BestSellerName>
              Apple <br /> iPhone XS Max
            </BestSellerName>
            <p>Starting at $41.99/mo. or $999</p>
            <CardButton>Learn more</CardButton>
          </BestSellerCard>
          <BestSellerCard className="photo-card">
            <BestSellerImage src={iphonexr} alt="iPhone XR" />
            <hr className="phone-hr" />
            <BestSellerName>
              Apple <br /> iPhone XR
            </BestSellerName>
            <p>Starting at $31.99/mo. or $749</p>
            <CardButton>Learn more</CardButton>
          </BestSellerCard>
          <BestSellerCard className="photo-card">
            <BestSellerImage src={galaxys10} alt="Samsung S10" />
            <hr className="phone-hr" />
            <BestSellerName>
              Samsung <br /> Galaxy S10
            </BestSellerName>
            <p>Starting at $34.99/mo. or $849</p>
            <CardButton>Learn more</CardButton>
          </BestSellerCard>
          <BestSellerCard className="photo-card">
            <BestSellerImage src={iphone7} alt="iPhone 7" />
            <hr className="phone-hr" />
            <BestSellerName>
              Apple <br /> iPhone X
            </BestSellerName>
            <p>Starting at $34.99/mo. or $849</p>
            <CardButton>Learn more</CardButton>
          </BestSellerCard>
        </Slider>
      </React.Fragment>
    );
  }
}
