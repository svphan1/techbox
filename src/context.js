import React, { Component } from 'react';
import { allProducts, detailProduct } from "./data/data";
import { appleProducts } from "./data/appledata";
import { samsungProducts } from "./data/samsungdata";
import { googleProducts } from "./data/googledata";
import { lgProducts } from "./data/lgdata";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    allProducts: allProducts,
    appleProducts: appleProducts,
    samsungProducts: samsungProducts,
    googleProducts: googleProducts,
    lgProducts: lgProducts,
    detailProduct: detailProduct
  }

  handleDetail = () => {
    console.log('hello from detail');
  }

  addToCart = () => {
    console.log('hello from add to cart');
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
