import React, { Component } from "react";
import Product from "./Product";
import { Title } from "../css/Title";
import "../css/Product.css";
import { BestSellerTitle } from "../css/BestSellerTitle";
import { ProductConsumer } from "../../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <BestSellerTitle className="list-title">
          All Smartphones
        </BestSellerTitle>
        <div className="pad-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
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
