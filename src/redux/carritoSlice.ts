import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "../types/Product"
import { Carrito } from "../types/eCommerceStore"

export const initialState: Carrito = {
    carrito: [],
}

export const carritoSlice = createSlice({
    name: "carrito",
    initialState: initialState,
    reducers: {
        agregarProducto: (state: Carrito, action: PayloadAction<Product>) => {
            state.carrito.push(action.payload)
        },
        removerProducto: (state: Carrito, action: PayloadAction<Product>) => {
            state.carrito = state.carrito.filter((producto) => producto.id !== action.payload.id)
        },
    },
})

export const { agregarProducto, removerProducto } = carritoSlice.actions

export default carritoSlice.reducer
