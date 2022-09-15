import { Action, MainReducerState } from "../interfaces"

const cart = localStorage.getItem('cart')

export const initialState: MainReducerState = {
    loading: false,
    products: [],
    searchString: '',
    cart: cart ? JSON.parse(cart) : [],
    sortBy: 'LOW',
    currency: 'USD'
}

const reducer = (state: MainReducerState = initialState, action: Action): MainReducerState => {
    const { type, payload } = action
    switch (type) {
        case 'SET_MAIN_STATE':
            return { ...state, ...payload }
        default:
            return state
    }
}

export default reducer