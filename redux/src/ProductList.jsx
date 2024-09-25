// src/ProductList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './redux/store'; // Ensure this path is correct

const ProductList = () => {
    // Use useSelector to get products from the Redux store
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Product List</h1>
            {products.map(product => (
                <div key={product.id} style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>In Stock: {product.stock}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                    <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                    <p>Total: ${product.quantity * product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
