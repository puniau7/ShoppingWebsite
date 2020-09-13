import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout checkout__title">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/September/14th/LP/Stripe_PC1.jpgs"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2> Your Shopping Basket</h2>
            {/** list of products for checkout */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
