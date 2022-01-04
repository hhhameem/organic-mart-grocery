import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { getTotal } from './redux/cartSlice'
import ordersReducer from './redux/ordersSlice'
import productApi from './redux/productApi'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productApi,
        orders: ordersReducer,
    },
})

store.dispatch(getTotal())
