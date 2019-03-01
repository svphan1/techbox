import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../box.png";
import styled from "styled-components";

const logoStyle = {
  width: "2.3rem"
};

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            atl="store"
            className="navbar-brand"
            style={logoStyle}
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5" href="#">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                iPhone
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Samsung
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Google
              </Link>
            </li>
          </ul>
        </div>

        <span className="ml-auto">
          <ButtonContainer>
            <Icons className="fas fa-search" />
          </ButtonContainer>
        </span>
        <Link to="/cart" className="ml-4">
          <ButtonContainer>
            <span className="mr-2">
              <Icons className="fas fa-shopping-cart cart" />
            </span>
          </ButtonContainer>
        </Link>
        <ButtonContainer
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </ButtonContainer>
      </nav>
    );
  }
}

const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid rgb(110, 117, 124);
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.4rem;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: var(--mainGray);
  }
`;

const Icons = styled.i`
  color: white;
`;
