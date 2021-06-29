import React from 'react';
import "./Basket.css";

export default function Basket(props) {
    const { cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const gstPrice = itemsPrice * 0.14;
    const totalPrice = itemsPrice + gstPrice;
    return (
        <div className="CartBox">
            <h2 className="CartHeading">Cart Items</h2>
            <div>
        {cartItems.length === 0 && 
          <div><img className="CartEmpty" src = "https://tse2.mm.bing.net/th?id=OIP.r6aijQ7gtefVW3pa7N_t7AHaFQ&pid=Api&P=0&w=241&h=172"/></div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2 BasketDisplay">{item.name}</div>
            <div className="col-2 BasketButton">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x Rs.{item.price.toFixed(2)}
            </div>
            </div>
            ))}

{cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2 CartPrice">Items Price</div>
              <div className="col-1 text-right">Rs.{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2 CartPrice">GST Price</div>
              <div className="col-1 text-right">Rs.{gstPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2 CartPrice">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Rs.{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className="CartExitButton" onClick={() => alert('Your order have been successfully placed.')}>
                Checkout
              </button>
            </div>
          </>
        )}
        </div>
        </div>
        )
        }