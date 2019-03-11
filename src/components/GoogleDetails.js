import React, { Component } from "react";
import "./css/Product.css";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { DetailsButton } from "./css/DetailsButton.js";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted my-5">
                  <h1 className="font-weight-bold details-name">
                    {company} {title}
                  </h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    src={img}
                    className="img-fluid details-img"
                    alt="product"
                  />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h3>Model: {title}</h3>
                  <h6 className="text-uppercase mt-3 mb-2">
                    Made by: <span>{company}</span>
                  </h6>
                  <h6>
                    Price: <span>$</span>
                    {price}
                  </h6>
                  <p className="text-capitalize text-left mt-3 mb-0">Info:</p>
                  <p className="text-muted">{info}</p>
                  {/* buttons */}
                  <div className="d-flex justify-content-start">
                    <Link to="/google" style={{ textDecoration: "none" }}>
                      <DetailsButton cart>Back to Products</DetailsButton>
                    </Link>
                    <DetailsButton
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addGoogleToCart(id);
                        value.openGoogleModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </DetailsButton>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
