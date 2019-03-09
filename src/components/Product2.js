import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { BestSellerCard } from "./css/BestSellerCard";
import { BestSellerName } from "./css/BestSellerName";
import { BestSellerImage } from "./css/BestSellerImage";
import { CardButton } from "./css/CardButton";

export default class Product2 extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <BestSellerCard className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <BestSellerImage src={img} alt="product" />
        <hr className="phone-hr" />
        <BestSellerName>
          Samsung <br /> Galaxy Note 9
        </BestSellerName>
        <p>Starting at $29.89/mo. or $699</p>
        <Link to="/details">
          <CardButton>Learn more</CardButton>
        </Link>
        <button
          className="cart-btn"
          disabled={inCart ? true : false}
          onClick={() => {
            console.log("added to cart");
          }}
        >
          {inCart ? (
            <p className="text-capitalize mb-0" disabled>
              in cart
            </p>
          ) : (
            <i className="fas fa-cart-plus" />
          )}
        </button>
      </BestSellerCard>
    );
  }
}
