import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  const totalQuantity = useSelector(state => state.products.totalQuantity);
  const totalAmount = useSelector(state => state.products.totalAmount);
  const gst = 18;
  const shippingCost = 10;

  const grandTotal = totalAmount + (totalAmount * gst / 100) + shippingCost;

  return (
    <div className="cart-summary">
      <h2>Cart</h2>
      <div className="cart-row">
        <div className="cart-label">Sub Total</div>
        <div className="cart-value">${totalAmount.toFixed(2)}</div>
      </div>
      <div className="cart-row">
        <div className="cart-label">GST</div>
        <div className="cart-value">{gst}%</div>
      </div>
      <div className="cart-row">
        <div className="cart-label">Shipping Charges</div>
        <div className="cart-value">${shippingCost}</div>
      </div>
      <div className="cart-row grand-total">
        <div className="cart-label"><h3>Grand Total</h3></div>
        <div className="cart-value"><h3>${grandTotal.toFixed(2)}</h3></div>
      </div>
      <div className="d-grid gap-2 mt-5">
        <button className="btn" type="button" onClick={() => { alert("Order Placed") }}><h4>Place Order</h4></button>
      </div>
    </div>
  );
};

export default CartSummary;
