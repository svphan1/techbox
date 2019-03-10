import React, { Component } from "react";
import Google from "./Google";
import { Title } from "./css/Title";
import "./css/Product.css";
import { BestSellerTitle } from "./css/BestSellerTitle";
import { ProductConsumer } from "../context";

export default class GoogleList extends Component {
  render() {
    return (
      <React.Fragment>
        <BestSellerTitle className="list-title">Google</BestSellerTitle>
        <div className="pad-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.googleProducts.map(product => {
                    return <Google key={product.id} product={product} />;
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
