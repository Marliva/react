import './App.css'
import Cards from './components/Cards/Cards'
import ContainerCard from './components/ContainerCard/ContainerCard'
import MenuBoutique from './components/MenuBoutique/MenuBoutique'

function App() {


  return (
    <>
      <header>
        <MenuBoutique/> {/*Ne pas faire ça quand on a besoin des children*/}
      </header>
      

      <main>
      <ContainerCard></ContainerCard>
      </main>


      <footer>

      </footer>
    </>
  )
}

export default App
