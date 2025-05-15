
import { useState } from "react"

function CartItem({item,deleteCartItem}) {
const  [qty, setQty] = useState(1);
 const inc = () => {
    if (qty < 10) {
      setQty(qty + 1);
    }
  };
  const dec = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
   
  return (<>
    <div className='cartItem'>
      <h4><span className="imgThumbnail">
       <img src={item.thumbnail} alt={item.title}/></span>
       <sup style={{marginLeft:10,}}>{item.title}</sup>
       <button className="del-btn" onClick={deleteCartItem}>X</button>
       </h4>
      <span className='Qty'>Qty:<button onClick={dec}>-</button> {qty} <button onClick={inc}>+</button>
        <span className="price">${(item.price*qty).toFixed(2)}</span></span>
    </div>
    </>
  )
}

export default CartItem

