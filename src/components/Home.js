import React, { Component } from "react";
import styled from "styled-components";
import BestSeller from "./BestSeller";
import { Button } from "./CSS/Button";
import { Title } from "./CSS/Title";
import { HomeImage } from "./CSS/HomeImage";
import "./CSS/Home.css";
import fold from "./img/fold.png";

export default class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col title">
              <Title>Galaxy Fold</Title>
              <h3>
                Sign up for a chance to win Samsung's latest Galaxy Fold!{" "}
                <strong>#DoWhatYouCant</strong>
              </h3>
              <Button>Sign up and Shop</Button>
            </div>
            <div className="col">
              <HomeImage src={fold} alt="fold" />
            </div>
          </div>
        </div>
        <hr />

        <BestSeller />
      </React.Fragment>
    );
  }
}
