import React, { useContext } from "react";
import "./Cart.css";
import ArticleCart from "../ArticleCart/ArticleCart";
import BoutiqueContext from "../../context/BoutiqueContext";

const Cart = () => {
  const boutiqueContext = useContext(BoutiqueContext);
  if (boutiqueContext.cart.length) {
    let total = 0;
    boutiqueContext.cart.map(value => {
      total += value.qte*boutiqueContext.catalogue[value.id].price
    })
    return (
      <>
        <div>
          {boutiqueContext.cart.map((value, index) => (
            <ArticleCart key={index} item={value} />
          ))}
        </div>
        <div>
          Total de vos achats : {total} $
        </div>
      </>
    );
  } else {
    return <div>Aucun article dans votre panier.</div>;
  }
};

export default Cart;
