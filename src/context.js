import React, { Component } from "react";
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
    products: [],
    appleProducts: appleProducts,
    samsungProducts: samsungProducts,
    googleProducts: googleProducts,
    lgProducts: lgProducts,
    detailProduct: detailProduct
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    allProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id)
    return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {detailProduct: product}
    })
  };

  addToCart = (id) => {
    console.log(`hello from add to cart.id is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
