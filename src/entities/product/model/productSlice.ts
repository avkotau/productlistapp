import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

interface ProductState {
    items: Product[];
}

const initialState: ProductState = {
    items: [
        {
            id: 1,
            name: 'Яки Шримп',
            price: 810,
            weight: '210 г',
            description: 'Креветка, огурец, сыр гауда, тобико, чеснок, лук зелёный, ...',
        },
        {
            id: 2,
            name: 'Спайси Унаги',
            price: 890,
            weight: '205 г',
            description: 'Угорь, огурец, такуан, тобико, кунжут, сыр сливочный, лук з...',
        },
        {
            id: 3,
            name: 'Яки Салмон',
            price: 1030,
            weight: '200 г',
            description: 'Лосось, авокадо, сыр гауда, тобико, икра горбуши, рис, че...',
        },
        {
            id: 4,
            name: 'Уми-Уми',
            price: 1050,
            weight: '200 г',
            description: 'Лосось, креветка, сыр сливочный, авокадо, тобико, р...',
        },
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
