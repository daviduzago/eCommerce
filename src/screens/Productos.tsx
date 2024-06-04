import React from "react"
import ProductCard from "../Components/ProductCard"
import axios from "axios"
import { Product } from "../types/Product"

const Productos = () => {
    const [products, setProducts] = React.useState<Product[]>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(true)

    const randomRating = () => Math.floor(Math.random() * 5) + 1

    const randomPrice = () => Math.floor(Math.random() * 50) + 1

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get("/api/products")
                setProducts(response.data)
            } catch (error) {
                console.error("Error fetching products:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchProducts()
    }, [])

    return (
        <div className="max-w-screen-xl items-center justify-center mx-auto p-4">
            <div className="flex flex-1 items-center justify-between mx-auto p-4">
                <h1 className="flex flex-1 items-center justify-center text-3xl font-bold">Productos</h1>
            </div>
            {isLoading ? (
                <div className="flex flex-1 items-center justify-between mx-auto p-4">
                    <h1 className="flex flex-1 items-center justify-center text-2xl mt-10">Cargando...</h1>
                </div>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {products.map((product, index) => (
                        <ProductCard key={"product" + index} id={2} name={product.name} rating={randomRating()} price={randomPrice()} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Productos
