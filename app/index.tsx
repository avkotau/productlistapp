import React from 'react';
import { Provider } from 'react-redux';
import {store} from "@shared/store";
import ProductListPage from "@app/product-list";


export default function RootLayout() {
    return (
        <Provider store={store}>
            <ProductListPage/>
        </Provider>
    );
}
