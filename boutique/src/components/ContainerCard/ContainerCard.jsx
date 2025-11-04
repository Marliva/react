import React from 'react'
import Cards from '../Cards/Cards'
import articles from "../services/catalogue.service"



const ContainerCard = () => {
    
  return (
    <div className='Boutique'>
        {
            articles.map((value,index)=>
            <Cards 
            key={index}
            costume={value}
            
            
            />)

        }
        
    </div>
  )
}

export default ContainerCard