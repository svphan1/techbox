import React, { Component } from "react";
import { Title } from "../css/Title";
import CartColumns from "./CartColumns";

export default class Cart extends Component {
  render() {
    return (
      <secion>
        <Title className="text-center mt-3">Shopping Cart</Title>
        <CartColumns />
      </secion>
    );
  }
}
