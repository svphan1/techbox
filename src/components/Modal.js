import React, { Component } from "react";
import styled from "styled-components";
import "./css/Product.css"
import { ProductConsumer } from "../context";
import { DetailsButton } from "./css/DetailsButton";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal"className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                      <h5>Item added to cart!</h5>
                      <img src={img} className="img-fluid modal-img" alt="product"/>
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
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
