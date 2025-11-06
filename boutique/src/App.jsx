import { useState } from "react";
import "./App.css";
import ContainerCard from "./components/ContainerCard/ContainerCard";
import MenuBoutique from "./components/MenuBoutique/MenuBoutique";
import articles from "./services/catalogue.service";
import BoutiqueContext from "./context/BoutiqueContext";
import Cart from "./components/Cart/Cart";

function App() {
  const [catalogue, setCatalogue] = useState(articles);
  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    if (catalogue[id].qte > 0) {
      // console.log("addcart " + id);
      // console.log(catalogue[id].qte);
      const catalogueTmp = catalogue.map((value, index) => {
        //On crée une copie du catalogue
        if (index === id) {
          value.qte--;
        }
        return value;
      });
      // console.log(catalogueTmp[id]);
      setCatalogue(catalogueTmp);

      //Ajout des nouveaux articles dans le cart à partir de leur id
      let cartTmp;
      if (cart.length > 0) {
        let gotIt = false;
        cartTmp = cart.map((value, index) => {
          if (value.id === id) {
            value.qte++;
            gotIt = true;
          }
          return value;
        });
        if (!gotIt) {
          cartTmp.push({ id: id, qte: 1 });
        }
      } else {
        cartTmp = [{ id: id, qte: 1 }];
      }

      cartTmp.sort();
      setCart(cartTmp);
      // console.log(cartTmp);

      //Autre formule possible :
      // setCart([...cart, id]); //Spread Operator reprend l'entièreté du tableau (ici cart), et ajoute l'objet (ici id) derrière.
    }
  };

  const removeFromCart = (id) => {
    console.log("id remove : ", id);

    const catalogueTmp = catalogue.map((value, index) => {
      //On crée une copie du catalogue
      if (index === id) {
        value.qte++;
      }
      return value;
    });
    // console.log(catalogueTmp[id]);
    setCatalogue(catalogueTmp);

    //Retirer article du panier
    //Je crée un indice pour supprimer du tableau cartTmp l'entrée
    //dont la qte === 1
    let deleteIndex = undefined;
    //Je copie mon tableau cart
    const cartTmp = cart.map((value, index) => {
      //Si l'entrée à supprimer existe dans mon tableau
      if (value.id === id) {
        //Si sa quantité est supérieur à 1
        if (value.qte > 1) {
          //je la décrémente
          value.qte--;
        } else {
          //si elle est au moins égale à 1
          //Je l'ajoute à mon deleteIndex en vue de la supprimer
          //de cartTmp à la fin de ma boucle
          deleteIndex = index;
        }
      }
      return value;
    });
    // fin de boucle et suppression d'une entrée égale à 1 si elle existe
    if (deleteIndex !== undefined) {
      cartTmp.splice(deleteIndex, 1);
    }
    // set de mon tableau modifié dans cart
    setCart(cartTmp);
  };

  const removeAll = (id) => {
    // console.log("blabla",id)
    // let trouve = catalogue.find((value) => value.id === id);
    let indexDeleteCart = cart.findIndex((value)=>value.id===id);
    // console.log(trouve.id,trouve.qte);
    // console.log(indexDeleteCart);

    //traitement catalogue
    let qteTmp = cart[indexDeleteCart].qte;
    const catalogueTmp = catalogue.map((value) => {
      if (value.id === id) {
        value.qte += qteTmp;
      }
      return value;
    });
    setCatalogue(catalogueTmp);

    //traitement cart
    const cartTmp = cart.map((value)=>{
      return value;
    });
    cartTmp.splice(indexDeleteCart, 1);
    setCart(cartTmp);
  };

  return (
    <BoutiqueContext.Provider
      value={{
        catalogue,
        cart,
        addCart: addCart,
        removeFromCart: removeFromCart,
        removeAll: removeAll,
      }}
    >
      <header>
        <MenuBoutique /> {/*Ne pas faire ça quand on a besoin des children*/}
      </header>

      <main>
        <Cart></Cart>
        <ContainerCard catalogue={catalogue}></ContainerCard>
      </main>

      <footer></footer>
    </BoutiqueContext.Provider>
  );
}

export default App;
