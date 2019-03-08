import React, { Component } from 'react';
import Product from "./Product";
import { Title } from "./css/Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";  

export default class ProductList extends Component {
  state = {
    products: storeProducts
  }
  render() {
    return (
      <React.Fragment>
        <div className="pad-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  console.log(value);
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
