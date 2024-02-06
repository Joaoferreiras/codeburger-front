import React from "react"

import { Route, Navigate, Routes } from "react-router-dom"
import { Header } from "../components"
import PropTypes from "prop-types"

const PrivateRoute = ({ element: Element, isAdmin, ...rest }) => {
    const user = localStorage.getItem("codeburger:userInfo")

    if (!user) {
        return <Navigate to="/login" />
    }

    if (isAdmin && !JSON.parse(user).admin) {
        return <Navigate to="/" />
    }

    return (
        <>
            {!isAdmin && <Header />}
            <Element />
        </>)
}

export default PrivateRoute

PrivateRoute.propTypes = {
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}