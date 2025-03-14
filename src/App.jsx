import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './components/custom/Header';

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  // Add better error logging
  console.log("Auth State:", { isLoaded, isSignedIn, user })

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading your session...</p>
        </div>
      </div>
    )
  }

  // Add this check to handle session errors
  if (isLoaded && !isSignedIn) {
    return <Navigate to="/auth/sign-in" replace />
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Outlet />
    </main>
  )
}

export default App
