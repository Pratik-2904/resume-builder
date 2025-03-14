import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in'
import HomePage from './home/index.jsx'
import Dashboard from './components/ui/dashboard/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Add this console log to debug
console.log("ENV Key:", import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/",
    element: <HomePage />
  },
  {
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>

  </React.StrictMode>,
)
