import React from 'react';

const AppContext = React.createContext({
    appState: {},
    setAppState: () => {},
});

export const appInitialState = {
    cart: {
        currency: 'Euro',
        currencySign: '€',
        items: [
            {
                id: 1,
                name: 'Ekster Senate Cardholder',
                imageUrl:
                    'https://m.media-amazon.com/images/I/61zi8gxOKbL._AC_SL1000_.jpg',
                details: {
                    color: 'Black',
                    size: '200cm',
                    weight: '4kg',
                },
                quantity: 1,
                regularPrice: 69.0,
                discountPrice: 48.3,
            },
            {
                id: 2,
                name: 'MOFT Universal Laptop Stand',
                imageUrl:
                    'https://cdn.shopify.com/s/files/1/1451/0712/products/SEN-BLK_tracker_fe09a5eb-4b97-4e21-94c2-2e4e399a341d_960x.jpg?v=1586344132',
                quantity: 1,
                regularPrice: 29.99,
                discountPrice: 29.99,
            },
        ],
    },
};

export const AppContextProvider = AppContext.Provider;
export default AppContext;
