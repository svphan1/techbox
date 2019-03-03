import React, { Component } from "react";
import styled from "styled-components";
import BestSeller from "./BestSeller";
import { Button } from "./css/Button";
import { Title } from "./css/Title";
import { HomeImage } from "./css/HomeImage";
import "./css/Home.css";
import fold from "./img/fold.png";

export default class ProductList extends Component {
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
        <hr className="home-hr" />

        <div className="container carousel">
          <BestSeller />
        </div>
      </React.Fragment>
    );
  }
}
