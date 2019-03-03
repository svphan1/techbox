import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import note9 from "./img/galaxynote9.png";
import pixel3xl from "./img/pixel3xl.png";
import iphonexsmax from "./img/iphonexsmax.png";
import iphonexr from "./img/iphonexr.png";
import galaxys10 from "./img/galaxys10.png";
import iphone7 from "./img/iphone7.png";

export default class Product extends Component {
  render() {
    var settings = {
      centerMode: true,
      centerPadding: "0rem",
      slidesToShow: 3,
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
          <Card className="photo-card">
            <Image src={note9} alt="1" />
            <hr className="phone-hr"/>
            <CardName>Samsung <br/> Galaxy Note 9</CardName>
          </Card> 
          <Card className="photo-card">
            <Image src={pixel3xl} alt="Pixel 3 XL"/>
            <hr className="phone-hr"/>
            <CardName>Google <br/> Pixel 3 XL</CardName>
          </Card>
          <Card className="photo-card">
            <Image src={iphonexsmax} alt="iPhone XS Max" />
            <hr className="phone-hr"/>
            <CardName>Apple <br/> iPhone XS Max</CardName>
          </Card>
          <Card className="photo-card">
            <Image src={iphonexr} alt="iPhone XR" />
            <hr className="phone-hr"/>
            <CardName>Apple <br/> iPhone XR</CardName>
          </Card>
          <Card className="photo-card">
            <Image src={galaxys10} alt="Samsung S10" />
            <hr className="phone-hr"/>
            <CardName>Samsung <br/> Galaxy S10</CardName>
          </Card>
          <Card className="photo-card">
            <Image src={iphone7} alt="iPhone 7" />
            <hr className="phone-hr"/>
            <CardName>Apple <br/> iPhone X</CardName>
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
  font-size: 2.2rem;
`;

const Card = styled.div`
border: 1px solid #eee;
  // box-shadow: 0 20px 50px rgb(0, 0, 0, .5);
  // padding: 3rem 0 4rem 0;
  // z-index: 1;
  // background-color: transparent;
`;

const CardName = styled.h2`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 12rem;
  height: 24rem;
  margin: auto;
  margin-top: 3rem;
`