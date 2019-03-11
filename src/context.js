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
    googleProducts: [],
    lgProducts: [],
    detailProduct: detailProduct,
    cart: allProducts,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
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
    const index = tempProducts.indexOf(this.getAllItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openModal = id => {
    const product = this.getAllItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
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

  addAppleToCart = id => {
    let tempProducts = [...this.state.appleProducts];
    const index = tempProducts.indexOf(this.getAppleItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          appleProducts: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openAppleModal = id => {
    const product = this.getAppleItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
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

  addSamsungToCart = id => {
    let tempProducts = [...this.state.samsungProducts];
    const index = tempProducts.indexOf(this.getSamsungItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          samsungProducts: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openSamsungModal = id => {
    const product = this.getSamsungItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
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

  addGoogleToCart = id => {
    let tempProducts = [...this.state.googleProducts];
    const index = tempProducts.indexOf(this.getGoogleItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          googleProducts: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openGoogleModal = id => {
    const product = this.getGoogleItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
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

  addLGToCart = id => {
    let tempProducts = [...this.state.lgProducts];
    const index = tempProducts.indexOf(this.getLGItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          lgProducts: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openLGModal = id => {
    const product = this.getLGItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // end of brand methods  //

  // start of cart methods //

  increment = id => {
    console.log("this is increment method");
  };

  decrement = id => {
    console.log("this is decrement method");
  };

  removeItem = id => {
    console.log("item removed");
  };

  clearCart = () => {
    console.log("cart cleared");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          addAppleToCart: this.addAppleToCart,
          addSamsungToCart: this.addSamsungToCart,
          addGoogleToCart: this.addGoogleToCart,
          addLGToCart: this.addLGToCart,
          openModal: this.openModal,
          openAppleModal: this.openAppleModal,
          openSamsungModal: this.openSamsungModal,
          openGoogleModal: this.openGoogleModal,
          handleAppleDetail: this.handleAppleDetail,
          handleSamsungDetail: this.handleSamsungDetail,
          handleGoogleDetail: this.handleGoogleDetail,
          handleLGDetail: this.handleLGDetail,
          openLGModal: this.openLGModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
