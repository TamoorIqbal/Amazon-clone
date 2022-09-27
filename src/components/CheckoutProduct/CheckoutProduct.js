import React ,{useContext} from 'react'
import './CheckoutProduct.css'

import { GlobalContext } from "../../context/GlobalState";

export const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const { removeFromBasket } = useContext(GlobalContext);

  return ( <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {(
                    <button onClick={()=>{removeFromBasket(id)}}>Remove from Basket</button>
                )}
            </div>
        </div>
        
  )
}
