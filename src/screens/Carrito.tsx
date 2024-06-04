import ProductCard from "../Components/ProductCard"
import { useAppSelector } from "../hooks/redux"

const Carrito = () => {
    const { carrito } = useAppSelector((state) => state.carrito)
    return (
        <div className="max-w-screen-xl items-center justify-center mx-auto p-4">
            <div className="flex flex-1 items-center justify-between mx-auto p-4">
                <h1 className="flex flex-1 items-center justify-center text-3xl font-bold">Carrito</h1>
            </div>
            <div className="flex flex-wrap justify-center">
                {carrito.map((product, index) => (
                    <ProductCard key={"product" + index} id={product.id} name={product.name} rating={product.rating} price={product.price} />
                ))}
            </div>
        </div>
    )
}

export default Carrito
