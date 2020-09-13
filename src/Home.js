import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/September/14th/LP/V214721272_IN_WLME_Avicii_LP_PC_1.jpg"
        alt=""
      />
      {/** product id,name image */}

      <div className="home__row">
        <Product
          id="12321"
          title="Hidesign Spring/Summer 20 Women's Handbag"
          image="https://images-na.ssl-images-amazon.com/images/I/714MZ%2B7Sz-L._UL1100_.jpg"
          price={12.3}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="123245341"
          title="OnePlus 7 Pro (Mirror Grey, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)"
          image="https://images-na.ssl-images-amazon.com/images/I/51s0Mb5li8L._SL1000_.jpg"
          price={12.3}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="12356421"
          title="Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Silver),SM-R840NZSAINS"
          image="https://images-na.ssl-images-amazon.com/images/I/715H19Jsp-L._SL1500_.jpg"
          price={12.3}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="1235686821"
          title="boAt BassHeads 900 On-Ear Wired Headphone with Super Extra Bass, in-line Mic, Snug Fit and Lightweight Foldable Design (Carbon Black)"
          image="https://images-na.ssl-images-amazon.com/images/I/61xeIT6UHrL._SL1500_.jpg"
          price={12.3}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="12367821"
          title="Wingreens Farms Premium Veg Mayo, 800g"
          image="https://images-na.ssl-images-amazon.com/images/I/51K1oqVE10L._SL1000_.jpg"
          price={12.3}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="12367821"
          title="Wingreens Farms Premium Veg Mayo, 800g"
          image="https://images-na.ssl-images-amazon.com/images/I/51K1oqVE10L._SL1000_.jpg"
          price={12.3}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
