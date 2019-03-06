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

        <div>
          <img src={apple} alt="apple" width="100%" />
          <h1 class="caption">
            Get the products you want, <br /> the way you want it.
          </h1>
        </div>

        <div className="container">
          <div className="ad-section">
            <div className="ad">
              <img src={shipping} className="shipping" alt="shipping" />
              <p className="ad-title">Fast and free delivery.</p>
              <p className="paragraph">
                Pick up most items — usually within an hour — or let us know if
                someone else is picking up for you. We can even help set up your
                new Apple products.
              </p>
            </div>
            <div className="ad">
              <img src={paypal} className="paypal" alt="paypal" />
              <p className="ad-title">PayPal Protection</p>
              <p className="paragraph">
                Get free next-day delivery on any in-stock iPhone and free
                two-day delivery on almost everything else. Faster options are
                also available.*
              </p>
            </div>
            <div className="ad">
              <img src={gear} className="gear" alt="gear" />
              <p className="ad-title">Personal</p>
              <p className="paragraph">
                For in-stock items in certain locations, we offer same-day
                courier delivery for only $9. You can select this option at
                checkout if it’s available.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
