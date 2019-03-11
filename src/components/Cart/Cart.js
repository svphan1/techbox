import React, { Component } from "react";
import { Title } from "../css/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";

export default class Cart extends Component {
  render() {
    return (
      <secion>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title className="text-center my-5">Shopping Cart</Title>
                  <CartColumns />
                  <CartList value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </secion>
    );
  }
}
