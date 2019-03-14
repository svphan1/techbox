import React, { Component } from "react";
import styled from "styled-components";
import BestSeller from "../BestSeller";
import Footer from "./Footer";
import Shipping from "./Shipping";
import { Button } from "../css/Button";
import { Title } from "../css/Title";
import { HomeImage } from "../css/HomeImage";
import { BestSellerTitle } from "../css/BestSellerTitle";
import "../css/Home.css";
import fold from "../../img/fold.png";
import apple from "../../img/applecover2.png";
import verizon from "../../img/verizon.svg";
import att from "../../img/att.svg";
import tmobile from "../../img/tmobile.svg";
import sprint from "../../img/sprint.svg";
import unlocked from "../../img/unlocked.svg";
import shipping from "../../img/shipping.png";
import paypal from "../../img/paypal.png";
import gear from "../../img/gear.png";
import press from "../../img/press.png";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col title">
              <Title className="galaxy-title">Galaxy Fold</Title>
              <h3 className="sign-up">
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

        <div className="arrow bounce">
          <button
            className="fa fa-angle-down fa-3x arrow-icon"
            style={{ textDecoration: "none" }}
            href="#"
          />
        </div>

        <div className="below" />

        <hr className="home-hr" />

        <h4 className="compatible">Compatible phones for all carriers</h4>
        <div className="container carriers">
          <img src={verizon} className="carrier" alt="verizon" />
          <img src={att} className="carrier" alt="att" />
          <img src={tmobile} className="carrier" alt="tmobile" />
          <img src={sprint} className="carrier" alt="sprint" />
          <img src={unlocked} className="carrier" alt="unlocked" />
        </div>

        <section className="container carousel">
          <BestSeller />
        </section>

        <hr className="home-hr" />

        <div>
          <img className="apple" src={apple} alt="apple" width="100%" />
        </div>

        <Shipping />

        <img className="press" src={press} alt="press" />

        <section className="signup">
          <div className="container">
            <BestSellerTitle>Stay in touch</BestSellerTitle>
            <p className="center">
              Subscribe to our newsletter for exclusive sales and special
              offers.
            </p>
            <div className="input">
              <input
                className="form-control"
                type="text"
                placeholder="Email Address"
                aria-label="Search"
              />
              <button className="search-button">Sign up</button>
            </div>
          </div>
        </section>

        <Footer />
      </React.Fragment>
    );
  }
}
