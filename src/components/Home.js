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

        <hr className="home-hr" />

        <h4 class="compatible">Compatible phones for all carriers</h4>
        <div class="container carriers">
          <img src={verizon} className="carrier" alt="verizon" width="20%" />
          <img src={att} className="carrier" alt="att" width="20%" />
          <img src={tmobile} className="carrier" alt="tmobile" width="20%" />
          <img src={sprint} className="carrier" alt="sprint" width="20%" />
          <img src={unlocked} className="carrier" alt="unlocked" width="20%" />
        </div>

        <img src={apple} alt="apple" width="100%" />
      </React.Fragment>
    );
  }
}
