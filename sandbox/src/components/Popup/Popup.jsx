import React from "react";
import "./Popup.css";

export const Popup = () => {
  // let displayPopup = true;
  const [displayPopup, setDisplayPopup] = React.useState(true);
  const handleClick = (message) => {
    console.log(message);
    setDisplayPopup(!displayPopup);
    console.log(displayPopup);
  };
  return (
    <>
      <button
        onClick={() => {
          handleClick("jour");
        }}
      >
        PopUp
      </button>
      <button onClick={() => handleClick("nuit")}>PupOp</button>
      {
        /*
        condition classique : 
         if (displayPopup) { 
            ...
         } else {
            ...
         }
        pour une ternaire -> cond ? true : false (si condition est true, sinon)
        */
        displayPopup ? <div>Ma Super Popup</div> : <></>
      }
    </>
  );
};
