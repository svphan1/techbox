import React, { Component } from "react";
import styled from "styled-components";
import "./css/Product.css";
import { Link } from "react-router-dom";
import { CardButton } from "./css/CardButton";
import { CartButton } from "./css/CartButton";
import { PhoneName } from "./css/PhoneName";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, company, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("clicked")}
          >
            <img src={img} alt="product" className="card-img-top" />
            <hr className="product-hr" />
            <PhoneName>
              {company} <br /> {title} <h6>${price}</h6>
            </PhoneName>

            <div className="buttons">
              <Link to="/details">
                <CartButton className="product-btn">Details</CartButton>
              </Link>
              <CartButton
                className="product-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  console.log("added to cart");
                }}
              >
                {inCart ? (
                  <p className="text-capitalize mb-0 cart-btn" disabled>
                    in cart
                  </p>
                ) : (
                  <i className="fas fa-cart-plus" />
                )}
              </CartButton>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;
