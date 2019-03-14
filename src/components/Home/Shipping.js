import React from "react";
import shipping from "../../img/shipping.png";
import paypal from "../../img/paypal.png";
import gear from "../../img/gear.png";

export default function Shipping() {
  return (
    <React.Fragment>
      <section className="container">
        <div className="container">
          <div className="ad">
            <img src={shipping} className="shipping" alt="shipping" />
            <p className="ad-title">Fast and Free Delivery</p>
            <p className="paragraph">
              Get free next-day delivery on any in-stock phones and free two-day
              delivery on almost everything else. Faster options are also
              available.
            </p>
          </div>
          <div className="ad">
            <img src={paypal} className="paypal" alt="paypal" />
            <p className="ad-title">PayPal Protection</p>
            <p className="paragraph">
              Shop with peace of mind. We use PayPayl for payments because they
              provide extensive buyer and seller protections. Get what was
              advertised or get a refund!
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
    </React.Fragment>
  );
}
