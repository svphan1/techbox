import React from "react";
import styled from "styled-components";
import "../css/Home.css";
import { FooterList } from "../css/FooterList";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import pinterest from "../../img/pinterest.png";
import youtube from "../../img/youtube.png";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container foot">
          <ul className="social">
            <li className="social-items">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-img" src={facebook} alt="facebook img" />
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
