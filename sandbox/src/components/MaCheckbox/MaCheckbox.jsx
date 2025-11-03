import React from 'react'
import "./MaCheckbox.css"

export const MaCheckbox = (props) => {
    // console.log(props)
  return (
    <div className={props.colorCheck}>
        <input type="checkbox" id='check' checked={props.stateCheck}></input>
        <label htmlFor="check">{props.children}</label>
    </div>

  )
};
