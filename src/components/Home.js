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
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import twitter from "./img/twitter.png";
import pinterest from "./img/pinterest.png";
import youtube from "./img/youtube.png";

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
              <input
                class="form-control"
                type="text"
                placeholder="Email Address"
                aria-label="Search"
              />
              <button className="search-button">Sign up</button>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div className="container">
            <ul className="social">
              <li className="social-items">
                <a href="https://www.facebook.com/" target="_blank">
                  <img className="social-img" src={facebook} />
                </a>
              </li>
              <li className="social-items">
                <a href="https://instagram.com" target="_blank">
                  <img className="social-img" src={instagram} />
                </a>
              </li>
              <li className="social-items">
                <a href="https://twitter.com/" target="_blank">
                  <img className="social-img" src={twitter} />
                </a>
              </li>
              <li className="social-items">
                <a href="https://www.pinterest.com/" target="_blank">
                  <img className="social-img" src={pinterest} />
                </a>
              </li>
              <li className="social-items">
                <a href="https://www.youtube.com/" target="_blank">
                  <img className="social-img" src={youtube} />
                </a>
              </li>
            </ul>

            <section className="footer-info">
              <article className="footer-info-col">
                <h5 className="footer-info-name">Products</h5>
                <ul className="footer-info-list">
                  <li><a href="#"></a>Apple</li>
                  <li><a href="#"></a>Samsung</li>
                  <li><a href="#"></a>Google</li>
                  <li><a href="#"></a>LG</li>
                </ul>
              </article>
              <article className="footer-info-col">
                <h5 className="footer-info-name">About</h5>
                <ul className="footer-info-list">
                  <li><a href="#"></a>Our Products</li>
                  <li><a href="#"></a>Our Commitment</li>
                  <li><a href="#"></a>Careers</li>
                  <li><a href="#"></a>Contact Us</li>
                  <li><a href="#"></a>FAQ</li>
                </ul>
              </article>
              <article className="footer-info-col">
                <h5 className="footer-info-name">Legal</h5>
                <ul className="footer-info-list">
                  <li><a href="#"></a>Terms & Conditions</li>
                  <li><a href="#"></a>Retailer Policy</li>
                  <li><a href="#"></a>Privacy Policy</li>
                  <li><a href="#"></a>Our Guarantee</li>
                  <li><a href="#"></a>Assessibility Notice</li>
                </ul>
              </article>
              <article className="footer-info-col">
                <h5 className="footer-info-name">Resources</h5>
                <ul className="footer-info-list">
                  <li><a href="#"></a>Apple</li>
                  <li><a href="#"></a>Samsung</li>
                  <li><a href="#"></a>Google</li>
                  <li><a href="#"></a>LG</li>
                </ul>
              </article>
            </section>
            <div className="footer-hr"></div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
