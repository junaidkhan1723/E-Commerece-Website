
function CartItem({item,deleteCartItem}) {
  return (<>
    <div className='cartItem'>
      <h4><span className="imgThumbnail">
       <img src={item.thumbnail} alt={item.title}/></span>
       <sup style={{marginLeft:10,}}>{item.title}</sup>
       <button className="del-btn" onClick={deleteCartItem}>X</button>
       </h4>
      <span className='Qty'>Qty:<button>-</button> 1 <button>+</button><span className="price">${item.price}</span></span>
    </div>
    </>
  )
}

export default CartItem
