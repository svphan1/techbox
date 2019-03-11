import React, { Component } from "react";
import styled from "styled-components";
import "./css/Product.css";
import { Link } from "react-router-dom";
import { CartButton } from "./css/CartButton";
import { PhoneName } from "./css/PhoneName";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { appleProducts } from "../data/appledata";

export default class Apple extends Component {
  render() {
    const { id, company, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleAppleDetail(id)}
              >
                <Link to="/appledetails">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <div className="img-footer">
                  <hr className="product-hr" />
                  <PhoneName>
                    {company} <br /> {title} <p>${price}</p>
                  </PhoneName>
                </div>

                <div className="buttons">
                  <Link to="/appledetails" style={{ textDecoration: "none" }}>
                    <CartButton
                      className="product-btn"
                      onClick={() => value.handleAppleDetail(id)}
                    >
                      Details
                    </CartButton>
                  </Link>
                  <CartButton
                    className="product-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addAppleToCart(id);
                      value.openAppleModal(id);
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
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

Apple.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    incart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div``;
