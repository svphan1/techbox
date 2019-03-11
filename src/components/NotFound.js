import React, { Component } from "react";
import notFound from "../img/404.png";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto text-center text-uppercase pt-5">
            <h3>
              the requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              {""} was not found
            </h3>
          </div>
        </div>
        <img style={{ width: "100%" }} src={notFound} alt="page not found" />
      </div>
    );
  }
}
