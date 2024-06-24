import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './route/router.jsx';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext.jsx';
import"../src/assets/styles.css" ;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>

  </React.StrictMode>,
)
