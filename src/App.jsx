import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './components/Product';
import CartSummary from './components/CartSummary';
import { setProducts } from './redux/reducers/productsSlice';
import "./style.css"

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);

  useEffect(() => {
    fetch('https://redux-cartpage.netlify.app/product.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        return response.json();
      })
      .then(data => {
        dispatch(setProducts(data.products));
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="cart-cards-container">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
};

export default App;
