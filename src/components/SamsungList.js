import React, { Component } from "react";
import Samsung from "./Samsung";
import { Title } from "./css/Title";
import "./css/Product.css";
import { BestSellerTitle } from "./css/BestSellerTitle";
import { ProductConsumer } from "../context";

export default class SamsungList extends Component {
  render() {
    return (
      <React.Fragment>
        <BestSellerTitle className="list-title">Samsung</BestSellerTitle>
        <div className="pad-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.samsungProducts.map(product => {
                    return <Samsung key={product.id} product={product} />;
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
