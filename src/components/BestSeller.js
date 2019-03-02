import React, { Component } from "react";
import "./CSS/BestSeller.css";
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
      centerPadding: "20px",
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
        <h3 className="best-seller">Best sellers</h3>
        <Slider {...settings}>
          <div className="photo-card">
            <img src={photo1} alt="1" />
            <h3>iPhoneX</h3>
          </div>
          <div className="photo-card">
            <img src={photo2} alt="1" />
            <h3>iPhoneX</h3>
          </div>
          <div className="photo-card">
            <img src={photo3} alt="1" />
            <h3>iphoneX</h3>
          </div>
          <div className="photo-card">
            <img src={photo4} alt="1" />
          </div>
          <div className="photo-card">
            <img src={photo5} alt="1" />
          </div>
          <div className="photo-card">
            <img src={photo6} alt="1" />
          </div>
        </Slider>
      </React.Fragment>
    );
  }
}
