import React, { Component } from "react";
import styled from "styled-components";
import Product from "./Product";
import "./Home.css"
import fold from "./img/fold2.png";

const hr = {
  height: "5px"
}

export default class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <Title>Galaxy Fold</Title>
          </div>
          <div className="col">
            <HomeImage src={fold} alt="fold" />
          </div>
        </div>
      </div>
      <hr style={hr}></hr>
      </React.Fragment>
    );
  }
}

// const HomeImage = styled.img`
//   width: 50rem;
//   max-width: 100%; 
//   margin-top: 2rem;
//   position: absolute;
//   margin-right: 10rem;
// `;

const HomeImage = styled.img`
  width: 24rem;
  max-width: 100%;
  margin: 1.8rem 0;
  margin-left: 5rem;
`

const Title = styled.h3`
  font-family: "Prompt", sans-serif;
  font-weight: bold;
  font-size: 3rem;
  margin: 5rem 0 0 7rem;
  z-index: 100;
`;
