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
      console.log("addcart " + id);
      console.log(catalogue[id].qte);
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
      console.log(cartTmp);

      //Autre formule possible :
      // setCart([...cart, id]); //Spread Operator reprend l'entièreté du tableau (ici cart), et ajoute l'objet (ici id) derrière.
    }
  };
  return (
    <BoutiqueContext.Provider
      value={{
        catalogue,
        cart,
        addCart: addCart,
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
