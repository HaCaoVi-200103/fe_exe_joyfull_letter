import { createSlice } from '@reduxjs/toolkit'
import { Cart } from '../../../interfaces/cart'



// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlide = createSlice({
    name: 'cartSlide',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },
})


export default cartSlide.reducer