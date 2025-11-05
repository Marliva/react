import { useState } from "react"
import './App.css'
import ContainerCard from './components/ContainerCard/ContainerCard'
import MenuBoutique from './components/MenuBoutique/MenuBoutique'
import articles from "./services/catalogue.service"
import BoutiqueContext from "./context/BoutiqueContext"


function App() {

  const [catalogue,setCatalogue] = useState(articles);
  const addCart = (id) => {
    console.log("addcart "+id)
  } 
  return (
    <BoutiqueContext.Provider value={{catalogue,addCart:addCart}}>
      <header>
        <MenuBoutique/> {/*Ne pas faire ça quand on a besoin des children*/}
      </header>
      

      <main>
      <ContainerCard catalogue={catalogue}></ContainerCard>
      </main>


      <footer>

      </footer>
    </BoutiqueContext.Provider>
  )
}

export default App
