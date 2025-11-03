import {MaCheckbox} from "./components/MaCheckbox/MaCheckbox";
import {Liste} from "./components/Liste/Liste";
import {Popup} from "./components/Popup/Popup";
import "./App.css";



const Bouton = (props) => {
  // console.log(props);
  return (
  <button className={props.colorBtn}>{props.children}</button>
  )
};

function App() {
  return (
    <div>
      {/* Voici comment faire un commentaire en React*/}
      {/* Les attributs déclarés dans un component deviennent des propritétés de props */}
      <Bouton colorBtn="green">Mon Premier Bouton</Bouton>
      <Bouton colorBtn="red">Mon Deuxième Bouton</Bouton>
      <p>Bonjour</p>
      <MaCheckbox stateCheck={true} colorCheck="green">label 1</MaCheckbox>
      <MaCheckbox stateCheck={false} colorCheck="red">label 2</MaCheckbox>
      <Liste></Liste>
      <Popup></Popup>
    </div>
  )
};

export default App;
