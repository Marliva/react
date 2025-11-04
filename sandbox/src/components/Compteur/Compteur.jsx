import React,{useState} from "react";
import "./Compteur.css";

export const Compteur = () => {
    const [count,setCount] = useState(0) /*on n'a pas besoin de marquer React.useState car on a importé la méthode useState dans l'import de React.*/
    const handleClick = ()=>{
        setCount (count + 1);
        // console.log(count) /*va afficher la valeur dans le debugger. Attention, le premier clic affichera 0 en valeur.*/
    }
    return (
    <div>
        <button onClick={handleClick}>Un à la fois : {count}</button>
    </div>
  )
}
