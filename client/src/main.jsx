import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EntryPoint from './EntryPoint.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Upload from './Components/Upload.jsx'
import PrivacyPolicy from './Components/PrivacyPolicy.jsx'
import Desc from './Components/Desc.jsx'






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
        {
          path: '/upload',
          element: <Upload />
        },
        {
          path: '/privacy',
          element: <PrivacyPolicy />
        },
        {
          path: '/desc',
          element: <Desc />
        },
        
      
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
