import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EntryPoint from './EntryPoint.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'






const router = createBrowserRouter([
  {
    path: '/',
    element:<EntryPoint />,
    children:[{
      path:'',
      element:<Home />
    },
      
        {
          path: '/about',
          element: <About />
        },
        
      
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
