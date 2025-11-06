import React, { useContext } from "react";
import BoutiqueContext from "../../context/BoutiqueContext";
import "./ArticleCart.css";

function ArticleCart(props) {
  const boutiqueContext = useContext(BoutiqueContext);
  const values = boutiqueContext.catalogue[props.item.id];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90vw",
        borderRadius: 20,
        border: ".1px solid black",
        padding: 10,
        margin: 10,
      }}
    >
      <div style={{ maxWidth: 200, maxHeight: 50, overflow: "hidden" }}>
        <img src={values.url} style={{ objectFit: "contain" }}></img>
      </div>
      <div>{values.name}</div>
      <div>{values.price+"$"}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 300,
        }}
      >
        <div>-</div>
        <div>{props.item.qte}</div>
        <div onClick={()=>boutiqueContext.addCart(props.item.id)}>+</div>
      </div>
      <div>Total {"??"}</div>
    </div>
  );
}

export default ArticleCart;
