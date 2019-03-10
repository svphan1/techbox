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
    appleProducts: [],
    samsungProducts: [],
    googleProducts: googleProducts,
    lgProducts: lgProducts,
    detailProduct: detailProduct
  };

  componentDidMount() {
    this.setProducts();
    this.setAppleProducts();
    this.setSamsungProducts();
    this.setGoogleProducts();
    this.setLGProducts();
  }

  // Set copy & method for allProducts

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

  getAllItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getAllItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf()
  };

  // Set copy & method for appleProducts

  setAppleProducts = () => {
    let tempProducts = [];
    appleProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { appleProducts: tempProducts };
    });
  };

  getAppleItem = id => {
    const product = this.state.appleProducts.find(item => item.id === id);
    return product;
  };

  handleAppleDetail = id => {
    const product = this.getAppleItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    console.log(`hello from add to cart.id is ${id}`);
  };

  // Set copy & method for sansumgProducts

  setSamsungProducts = () => {
    let tempProducts = [];
    samsungProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { samsungProducts: tempProducts };
    });
  };

  getSamsungItem = id => {
    const product = this.state.samsungProducts.find(item => item.id === id);
    return product;
  };

  handleSamsungDetail = id => {
    const product = this.getSamsungItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    console.log(`hello from add to cart.id is ${id}`);
  };

  // Set copy & method for googleProducts

  setGoogleProducts = () => {
    let tempProducts = [];
    googleProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { googleProducts: tempProducts };
    });
  };

  getGoogleItem = id => {
    const product = this.state.googleProducts.find(item => item.id === id);
    return product;
  };

  handleGoogleDetail = id => {
    const product = this.getGoogleItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    console.log(`hello from add to cart.id is ${id}`);
  };

  // Set copy & method for LGProducts

  setLGProducts = () => {
    let tempProducts = [];
    lgProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { lgProducts: tempProducts };
    });
  };

  getLGItem = id => {
    const product = this.state.lgProducts.find(item => item.id === id);
    return product;
  };

  handleLGDetail = id => {
    const product = this.getLGItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    console.log(`hello from add to cart.id is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleAppleDetail: this.handleAppleDetail,
          handleSamsungDetail: this.handleSamsungDetail,
          handleGoogleDetail: this.handleGoogleDetail,
          handleLGDetail: this.handleLGDetail,
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
