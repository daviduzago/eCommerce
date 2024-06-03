import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./screens/Home"
import SobreNosotros from "./screens/SobreNosotros"
import Carrito from "./screens/Carrito"

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/carrito" element={<Carrito />} />
            </Routes>
        </div>
    )
}

export default App
