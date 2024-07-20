import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/reducers/productsSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity({ productId: product.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ productId: product.id }));
  };

  return (
    <div className="cart-card">
      <div className="cart-item">
        <img src={product.image} alt={product.title} className="cart-item-image" />
        <div className="cart-item-details">
          <h2 className="cart-item-title">{product.title}</h2>
          <h6 className="cart-item-description">{product.description}</h6>
          <div className="cart-item-actions">
            <span className="cart-item-price">${product.price.toFixed(2)}</span>
            <div className="btn-container">
              <button onClick={handleDecrement} className="btn">-</button>
                          <h1>{ product.count}</h1>
              <button onClick={handleIncrement} className="btn">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
