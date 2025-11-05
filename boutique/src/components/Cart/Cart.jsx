import React, { useContext } from "react";
import "./Cart.css";
import ArticleCart from "../ArticleCart/ArticleCart";
import BoutiqueContext from "../../context/BoutiqueContext";

const Cart = () => {
  const boutiqueContext = useContext(BoutiqueContext);
  if (boutiqueContext.cart.length) {
    return (
      <div>
        {boutiqueContext.cart.map((value, index) => (
          <ArticleCart key={index} item={value} />
        ))}
      </div>
    );
  } else {
    return <div>Aucun article dans votre panier.</div>;
  }
};

export default Cart;
