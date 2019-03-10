import React, { Component } from "react";
import LG from "./LG";
import { Title } from "./css/Title";
import "./css/Product.css";
import { BestSellerTitle } from "./css/BestSellerTitle";
import { ProductConsumer } from "../context";

export default class LGList extends Component {
  render() {
    return (
      <React.Fragment>
        <BestSellerTitle className="list-title">LG</BestSellerTitle>
        <div className="pad-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.lgProducts.map(product => {
                    return <LG key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
