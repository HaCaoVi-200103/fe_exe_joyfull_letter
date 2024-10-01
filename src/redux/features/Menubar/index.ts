import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface MenuBarState {
    value: boolean
}

// Define the initial state using that type
const initialState: MenuBarState = {
    value: false,
}

export const menuBarSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        handleMenuBar: (state) => {
            state.value = !state.value
        },

    },
})

export const { handleMenuBar } = menuBarSlice.actions

export default menuBarSlice.reducer