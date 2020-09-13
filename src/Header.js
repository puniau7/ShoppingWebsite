import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      {/** logo on the left -img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/** Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/**3 links */}
      <div className="header__nav"></div>
      {/** 1st link  href refreshs the page Link doesnt*/}
      <Link to="/login" className="header__link">
        <div className="header__option">
          <span className="header__option__lineOne">Hello user</span>
          <span className="header__option__lineTwo">Sign In</span>
        </div>
      </Link>
      {/** 2nd link */}
      <Link className="header__link">
        <div className="header__option">
          <span className="header__option__lineOne">Returns</span>
          <span className="header__option__lineTwo">& Orders</span>
        </div>
      </Link>
      {/** 3rd link */}
      <Link className="header__link">
        <div className="header__option">
          <span className="header__option__lineOne">Your</span>
          <span className="header__option__lineTwo">Prime</span>
        </div>
      </Link>
      {/** 4th link */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/**  shopping basket icon*/}
          {/** number of items in basket */}
          <ShoppingBasketIcon />
          <span className="header__option__lineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
      {/** Basket icon with a number */}
    </nav>
  );
}

export default Header;
