import React, { Component } from "react";
import styled from "styled-components";
import BestSeller from "./BestSeller";
import { Button } from "./css/Button";
import { Title } from "./css/Title";
import { HomeImage } from "./css/HomeImage";
import "./css/Home.css";
import fold from "./img/fold.png";
import apple from "./img/applecover.png";
import verizon from "./img/verizon.svg";
import att from "./img/att.svg";
import tmobile from "./img/tmobile.svg";
import sprint from "./img/sprint.svg";
import unlocked from "./img/unlocked.svg";
import shipping from "./img/shipping.png";
import paypal from "./img/paypal.png";
import gear from "./img/gear.png";

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

        <h4 class="compatible">Compatible phones for all carriers</h4>
        <div class="container carriers">
          <img src={verizon} className="carrier" alt="verizon" />
          <img src={att} className="carrier" alt="att" />
          <img src={tmobile} className="carrier" alt="tmobile" />
          <img src={sprint} className="carrier" alt="sprint" />
          <img src={unlocked} className="carrier" alt="unlocked" />
        </div>

        <div className="container carousel">
          <BestSeller />
        </div>

        <hr className="home-hr" />

        <img src={apple} alt="apple" width="100%" />
        <h1 class="caption">Get the products you want, <br /> the way you want it.</h1>

        <div className="container">
          <div className="ad-section">
            <div className="ad">

            </div>
            <div className="ad">
            </div>
            <div className="ad">
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
