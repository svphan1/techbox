import React, { Component } from "react";
import Apple from "./Apple";
import { Title } from "./css/Title";
import "./css/Product.css";
import { BestSellerTitle } from "./css/BestSellerTitle";
import { ProductConsumer } from "../context";

export default class AppleList extends Component {
  render() {
    console.log('apples', this.appleProducts)
    return (
      <React.Fragment>
        <BestSellerTitle className="list-title">Apple</BestSellerTitle>
        <div className="pad-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.appleProducts.map(product => {
                    return <Apple key={product.id} product={product} />;
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
