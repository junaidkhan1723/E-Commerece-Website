import CartItem from './CartItem'
function Carts({cart,deleteCartItem}) {
  
   
 
  return (
    <div className='mainCart'>
         <div className='allCarts'>
          <h2> Your Shopping Cart 🛒</h2>
{cart.length > 0?
<>
{cart.map( (item,index)=>{ 
   return (<CartItem key={index} item={item} deleteCartItem={()=>deleteCartItem(item)} />)   
    })}

   <div className="cart-total">
                <span>Total:</span>
                <span id="cartTotal" >0:00</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
</>
    : <div className='emptyCart'>Your Cart is Empty 🥹</div>
    }
 



     </div>
    </div>
    
    
  )
}


export default Carts
