// src/redux/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, title: "iPhone 9", price: 549, stock: 94, quantity: 0 },
        { id: 2, title: "iPhone X", price: 899, stock: 34, quantity: 0 },
        { id: 3, title: "Samsung Universe 9", price: 1249, stock: 36, quantity: 0 },
        { id: 4, title: "OPPOF19", price: 280, stock: 123, quantity: 0 },
        { id: 5, title: "Huawei P30", price: 499, stock: 32, quantity: 0 },
    ]
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increaseQuantity(state, action) {
            const product = state.products.find(p => p.id === action.payload);
            if (product && product.quantity < product.stock) {
                product.quantity++;
            }
        },
        decreaseQuantity(state, action) {
            const product = state.products.find(p => p.id === action.payload);
            if (product && product.quantity > 0) {
                product.quantity--;
            }
        },
    }
});

export const { increaseQuantity, decreaseQuantity } = productSlice.actions;

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    },
});

export default store;
