import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/AllProducts/ProductList";
import AppleList from "./components/Apple/AppleList";
import SamsungList from "./components/Samsung/SamsungList";
import GoogleList from "./components/Google/GoogleList";
import LGList from "./components/LG/LGList";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Details from "./components/AllProducts/Details";
import AppleDetails from "./components/Apple/AppleDetails";
import SamsungDetails from "./components/Samsung/SamsungDetails";
import GoogleDetails from "./components/Google/GoogleDetails";
import LGDetails from "./components/LG/LGDetails";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/apple" component={AppleList} />
          <Route path="/samsung" component={SamsungList} />
          <Route path="/google" component={GoogleList} />
          <Route path="/lg" component={LGList} />
          <Route path="/details" component={Details} />
          <Route path="/appledetails" component={AppleDetails} />
          <Route path="/samsungdetails" component={SamsungDetails} />
          <Route path="/googledetails" component={GoogleDetails} />
          <Route path="/lgdetails" component={LGDetails} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
