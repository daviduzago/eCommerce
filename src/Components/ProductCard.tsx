import React from "react"
import { Product } from "../types/Product"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { agregarProducto, removerProducto } from "../redux/carritoSlice"

const ProductCard: React.FC<Product> = ({ id, image, name, price, rating = 3 }) => {
    const stars = Array.from({ length: 5 }, (_, index) => index < rating)

    const dispatch = useAppDispatch()
    const { carrito } = useAppSelector((state) => state.carrito)
    const onAddToCart = () => {
        const productToDispatch: Product = { id, image, name, price, rating }
        if (carrito.find((producto) => producto.id === id)) {
            dispatch(removerProducto(productToDispatch))
        } else {
            dispatch(agregarProducto(productToDispatch))
        }
    }
    const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
        <svg
            className={`w-4 h-4 ${filled ? "text-yellow-300" : undefined}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={filled ? "currentColor" : "white"}
            viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
    )

    return (
        <div
            key={id}
            className="max-w-[200px] m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <img className="flex" src={image ?? "https://picsum.photos/200"} alt="product image" />
            <div className="px-5 pb-5">
                <div className="h-2 w-2" />
                <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white flex-wrap">{name ?? "Product Name"}</h5>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {stars.map((filled, index) => (
                            <Star key={index} filled={filled} />
                        ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        {rating}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{`$${price}` ?? "$100"}</span>
                    <a
                        href="#"
                        onClick={onAddToCart}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {carrito.find((producto) => producto.id === id) ? "Quitar" : "Agregar"}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
