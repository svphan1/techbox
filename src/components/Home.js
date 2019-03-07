import React, { Component } from "react";
import styled from "styled-components";
import BestSeller from "./BestSeller";
import { Button } from "./css/Button";
import { Title } from "./css/Title";
import { HomeImage } from "./css/HomeImage";
import { BestSellerTitle } from "./css/BestSellerTitle";
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
import press from "./img/press.png";

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
          <img src={apple} alt="apple" width="100%" />
          <h1 class="caption">
            Get the products you want, <br /> the way you want it.
          </h1>
        </div>

        <section className="container">
          <div className="container">
            <div className="ad">
              <img src={shipping} className="shipping" alt="shipping" />
              <p className="ad-title">Fast and free delivery.</p>
              <p className="paragraph">
                Get free next-day delivery on any in-stock phones and free
                two-day delivery on almost everything else. Faster options are
                also available.
              </p>
            </div>
            <div className="ad">
              <img src={paypal} className="paypal" alt="paypal" />
              <p className="ad-title">PayPal Protection</p>
              <p className="paragraph">
                Shop with peace of mind. We use PayPayl for payments because
                they provide extensive buyer and seller protections. Get what
                was advertised or get a refund!
              </p>
            </div>
            <div className="ad">
              <img src={gear} className="gear" alt="gear" />
              <p className="ad-title">Personal Setup</p>
              <p className="paragraph">
                Learn about your new phone with ease! We'll show you how to get
                the most out of your new device, online or in store.
              </p>
            </div>
          </div>
        </section>

        <img className="press" src={press} alt="press" />

        <section className="signup">
          <div className="container">
            <BestSellerTitle>Stay in touch</BestSellerTitle>
            <p>
              Subscribe to our newsletter for exclusive sales and special
              offers.
            </p>
            <div className="input">
            <input class="form-control" type="text" placeholder="Email Address" aria-label="Search" />
              <button className="search-button">Sign up</button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
