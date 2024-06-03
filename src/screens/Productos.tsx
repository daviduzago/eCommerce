import ProductCard from "../Components/ProductCard"

const Productos = () => {
    // Llamar el api
    return (
        <div className="max-w-screen-xl items-center justify-center mx-auto p-4">
            <h1>Productos</h1>
            <div className="flex flex-wrap justify-center">
                <ProductCard id={2} name="Test" rating={4} price={200} />
                <ProductCard id={2} name="Test" rating={4} price={200} />
                <ProductCard id={2} name="Test" rating={4} price={200} />
                <ProductCard id={2} name="Test" rating={4} price={200} />
                <ProductCard id={2} name="Test" rating={4} price={200} />
                <ProductCard id={2} name="Test" rating={4} price={200} />
                <ProductCard id={2} name="Test" rating={4} price={200} />
                <ProductCard id={2} name="Test" rating={4} price={200} />
            </div>
        </div>
    )
}

export default Productos
