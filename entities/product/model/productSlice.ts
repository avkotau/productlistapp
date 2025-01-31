import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

interface ProductState {
    items: Product[];
}

const initialState: ProductState = {
    items: [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
        { id: 4, name: 'Product 4', price: 400 },
        { id: 5, name: 'Product 5', price: 500 },
    ],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
        },
    },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
