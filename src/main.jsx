import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/Routes'
import AuthProvider from './utils/provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
