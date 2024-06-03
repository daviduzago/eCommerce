import { Link, useLocation } from "react-router-dom"
import React from "react"

const NavBar = () => {
    const location = useLocation()
    const [selectedLink, setSelectedLink] = React.useState(location.pathname)

    const handleLinkClick = (path: string) => {
        setSelectedLink(path)
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex flex-row">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-2" alt="eCommerce Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YisusCommerce</span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/"
                                onClick={() => handleLinkClick("/")}
                                className={`block py-2 px-3 ${
                                    selectedLink === "/"
                                        ? "text-white bg-blue-700"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                } rounded md:p-1`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sobre-nosotros"
                                onClick={() => handleLinkClick("/sobre-nosotros")}
                                className={`block py-2 px-3 ${
                                    selectedLink === "/sobre-nosotros"
                                        ? "text-white bg-blue-700"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                } rounded md:p-1`}>
                                Sobre Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/carrito"
                                onClick={() => handleLinkClick("/carrito")}
                                className={`block py-2 px-3 ${
                                    selectedLink === "/carrito"
                                        ? "text-white bg-blue-700"
                                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                } rounded md:p-1`}>
                                Carrito
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
