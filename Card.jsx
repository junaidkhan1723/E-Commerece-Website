import React from "react";

function Card({ item ,addToCart}) {
  
  return (
    <>
      <section className="products">
        <div className="product-card">
          <div className="product-img">
            <img src={item.thumbnail} alt={item.title} />
          </div>
          <div className="dis">
            <h3>{item.title}</h3>
            <span className="proInfo"> {item.description}</span>
            <br />
            <div className="product-price">
              Price:- ${item.price}
              <br />
              Discount:- ${item.discountPercentage}
              <br />
              Product Rating:- {item.rating}/5
            </div>
          </div>
          <button className="btn" onClick={addToCart}>Add to Cart</button>

        </div>
      </section>
    </>
  );
}

export default Card;
