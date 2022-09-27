import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Product.css";

export const Product = ({ id, title, image, price, rating }) => {
  const  {addToBasket}  = useContext(GlobalContext);
  
  const addItem=()=>{
    const addNewItem = {
      id,
      title, 
      image, 
      price, 
      rating 
  }

  addToBasket(addNewItem);
  }
  return (
    <div className="product" key={id}>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addItem}>
        Add to Basket
      </button>
    </div>
  );
};
