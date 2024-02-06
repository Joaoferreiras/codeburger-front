import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRoutes from './routes/routes'


import AppProvider from './hooks'

import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <AppProvider>
           <AppRoutes/>
        </AppProvider>
        <ToastContainer autoClose={2000} theme='colored' />
        <GlobalStyle />
    </>

)
