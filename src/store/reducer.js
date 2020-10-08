import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes"

export const initialState = {
    cartProducts: [],
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
    currencyId: 'USD',
    currencyFormat: '$'
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                ...action.payload
            };
        case REMOVE_PRODUCT:
            const index = state.cartProducts.findIndex(p => p.id === action.payload.id);
            
            if (index >= 0) {
                return {
                    ...state,
                    productQuantity: state.productQuantity - 1,
                    cartProducts: [...state.cartProducts.slice(0, index), ...state.cartProducts.slice(index+1)]
                }
            }
            break;
        default:
            return state;
    }
}