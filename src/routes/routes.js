import React from "react"
import { Login, Register, Home, Products, Cart, Admin } from "../containers"
import PrivateRoute from "./privateRoute"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import paths from "../constants/paths"


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/produtos" element={<PrivateRoute element={Products} />} />
                <Route path="/carrinho" element={<PrivateRoute element={Cart} />} />
                <Route path="/" element={<PrivateRoute element={Home} />} />
                <Route path={paths.Order} element={<PrivateRoute element={Admin} isAdmin />} />
                <Route path={paths.Products} element={<PrivateRoute element={Admin} isAdmin />} />
                <Route path={paths.NewProduct} element={<PrivateRoute element={Admin} isAdmin />} />
                <Route path={paths.EditProduct} element={<PrivateRoute element={Admin} isAdmin />} />

            </Routes>
        </Router>)
}

export default AppRoutes