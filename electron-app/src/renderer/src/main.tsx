import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import App from './App'
import Contact from './routes/contact'

// https://stackoverflow.com/questions/75637194/electron-react-404-not-found-in-production
const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <App />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
