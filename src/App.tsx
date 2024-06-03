import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./screens/Home"
import Carrito from "./screens/Carrito"
import Productos from "./screens/Productos"

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/carrito" element={<Carrito />} />
            </Routes>
        </div>
    )
}

export default App
