import React from 'react'

import Card from './Card'
function Products({data,addToCart}) {
  return (
    <>
  <br/>
 <h2 className="title" style={{marginTop:20}}>Featured Products</h2>
    <div className='allCards'>
{data.map( (item,index)=>{ 
   return (<Card key={index} item={item} addToCart={()=>{addToCart(item)}} />)   
    })}
    </div>
    </>
  )
}

export default Products
