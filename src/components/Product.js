import React, { Component } from "react";
import styled from "styled-components";
import "./css/Product.css";
import { Link } from "react-router-dom";
import { CardButton } from "./css/CardButton";
import { PhoneName } from "./css/PhoneName";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
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
              Samsung <br /> Galaxy Note 9
            </PhoneName>
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
          </div>
          {/*card footer */}
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;
