import React from 'react'
import Cards from '../Cards/Cards'
import "./ContainerCard.css"

const ContainerCard = (props) => {
    
  return (
    <div className='Boutique'>
        {
            props.catalogue.map((value,index)=>
            <Cards 
            key={index}
            costume={value}
            
            
            />)

        }
        
    </div>
  )
}

export default ContainerCard