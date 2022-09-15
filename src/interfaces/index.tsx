export type SortType = "LOW" | "HIGH"
export type CurrencyType = "USD" | "BYN"
export type ActionType = "SET_MAIN_STATE"

export interface Action {
    type: ActionType
    payload: MainReducerState
}

export interface Product {
    readonly id: number
    readonly title: string
    readonly description: string
    readonly price: string
    readonly imageUrl: string
}

export interface CartItem {
    id: number
    quantity: number
}

export interface MainReducerState {
    loading: boolean
    products: Product[]
    searchString: string
    sortBy: SortType
    currency: CurrencyType
    cart: CartItem[]
}