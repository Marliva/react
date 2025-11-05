import { useState } from "react";
import "./App.css";
import ContainerCard from "./components/ContainerCard/ContainerCard";
import MenuBoutique from "./components/MenuBoutique/MenuBoutique";
import articles from "./services/catalogue.service";
import BoutiqueContext from "./context/BoutiqueContext";

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
      console.log(catalogueTmp[id]);
      setCatalogue(catalogueTmp);
    } // } else{

    // }
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
        <ContainerCard catalogue={catalogue}></ContainerCard>
      </main>

      <footer></footer>
    </BoutiqueContext.Provider>
  );
}

export default App;
