import React, { Component } from "react";
import styled from "styled-components";
import BestSeller from "./BestSeller";
import { Button } from "./css/Button";
import { Title } from "./css/Title";
import { HomeImage } from "./css/HomeImage";
import { BestSellerTitle } from "./css/BestSellerTitle";
import { FooterList } from "./css/FooterList";
import "./css/Home.css";
import fold from "../img/fold.png";
import apple from "../img/applecover2.png";
import verizon from "../img/verizon.svg";
import att from "../img/att.svg";
import tmobile from "../img/tmobile.svg";
import sprint from "../img/sprint.svg";
import unlocked from "../img/unlocked.svg";
import shipping from "../img/shipping.png";
import paypal from "../img/paypal.png";
import gear from "../img/gear.png";
import press from "../img/press.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";
import pinterest from "../img/pinterest.png";
import youtube from "../img/youtube.png";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col title">
              <Title>Galaxy Fold</Title>
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
          <a
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

        <section className="container">
          <div className="container">
            <div className="ad">
              <img src={shipping} className="shipping" alt="shipping" />
              <p className="ad-title">Fast and Free Delivery</p>
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

        <footer className="footer">
          <div className="container foot">
            <ul className="social">
              <li className="social-items">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-img"
                    src={facebook}
                    alt="facebook img"
                  />
                </a>
              </li>
              <li className="social-items">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-img"
                    src={instagram}
                    alt="instagram img"
                  />
                </a>
              </li>
              <li className="social-items">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-img" src={twitter} alt="twitter img" />
                </a>
              </li>
              <li className="social-items">
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-img"
                    src={pinterest}
                    alt="pinterest img"
                  />
                </a>
              </li>
              <li className="social-items">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-img" src={youtube} alt="youtube img" />
                </a>
              </li>
            </ul>

            <section className="footer-info">
              <article className="footer-info-col">
                <hr className="footer-hr" />
                <h5 className="footer-info-name">Products</h5>
                <ul className="footer-info-list">
                  <FooterList>Apple</FooterList>
                  <FooterList>Samsung</FooterList>
                  <FooterList>Google</FooterList>
                  <FooterList>LG</FooterList>
                </ul>
              </article>
              <article className="footer-info-col">
                <hr className="footer-hr" />
                <h5 className="footer-info-name">About</h5>
                <ul className="footer-info-list">
                  <FooterList>Our Products</FooterList>
                  <FooterList>Our Commitment</FooterList>
                  <FooterList>Careers</FooterList>
                  <FooterList>Contact Us</FooterList>
                  <FooterList>FAQ</FooterList>
                </ul>
              </article>
              <article className="footer-info-col">
                <hr className="footer-hr" />
                <h5 className="footer-info-name">Legal</h5>
                <ul className="footer-info-list">
                  <FooterList>Terms & Conditions</FooterList>
                  <FooterList>Retailer Policy</FooterList>
                  <FooterList>Privacy Policy</FooterList>
                  <FooterList>Our Guarantee</FooterList>
                  <FooterList>Assessibility Notice</FooterList>
                </ul>
              </article>
              <article className="footer-info-col">
                <hr className="footer-hr" />
                <h5 className="footer-info-name">Resources</h5>
                <ul className="footer-info-list">
                  <FooterList>My Account</FooterList>
                  <FooterList>Techbox Rewards</FooterList>
                  <FooterList>Blog</FooterList>
                  <FooterList>Newsletter</FooterList>
                  <FooterList>Digital Resources</FooterList>
                </ul>
              </article>
            </section>
            <hr className="footer-hr" />
            <p className="copyright">©Copyright 2019 Techbox </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
