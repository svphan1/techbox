import React, { Component } from "react";
import styled from "styled-components";
import "./css/Product.css";
import { ProductConsumer } from "../context";
import { DetailsButton } from "./css/DetailsButton";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price, company } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Item added to cart!</h5>
                      <img
                        src={img}
                        className="img-fluid modal-img py-3"
                        alt="product"
                      />
                      <h5>
                        {company} {title}
                      </h5>
                      <h5 className="text-muted">Price: ${price}</h5>
                      <div className="d-inline-block">
                        <Link to="/productlist" style={{textDecoration: 'none'}}>
                          <DetailsButton
                            cart
                            className="modal-btn"
                            onClick={() => closeModal()}
                          >
                            Continue Shopping
                          </DetailsButton>
                        </Link>
                        <Link to="/cart" style={{textDecoration: 'none'}}>
                          <DetailsButton
                            className="modal-btn"
                            onClick={() => closeModal()}
                          >
                            Go To Cart
                          </DetailsButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
          return;
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
