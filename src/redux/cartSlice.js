import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    cartTotal: 0,
    cartTotalQuantity: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            console.log(payload.id);

            const itemIndex = state.cart.findIndex(item => item.id === payload.id)
            if (itemIndex >= 0) {
                state.cart[itemIndex].cartQuantity += 1
            } else {
                const newCart = { ...payload, cartQuantity: 1 }
                state.cart.push(newCart)
            }

        },
        increment: (state, { payload }) => {
            const itemIndex = state.cart.findIndex(item => item.id === payload)
            state.cart[itemIndex].cartQuantity += 1

        },
        decrement: (state, { payload }) => {
            const itemIndex = state.cart.findIndex(item => item.id === payload)
            state.cart[itemIndex].cartQuantity -= 1


        },
        getTotal: (state) => {
            let { total, quantity } = state.cart.reduce((cartTotal, cart) => {
                const { price, cartQuantity } = cart
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0
                }
            );
            total = parseFloat(total.toFixed(2))
            state.cartTotal = total
            state.cartTotalQuantity = quantity
        },
        removeItem: (state, { payload }) => {
            const newItems = state.cart.filter(item => item.id !== payload)
            state.cart = newItems
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, decrement, increment, getTotal, removeItem } = cartSlice.actions

export default cartSlice.reducer