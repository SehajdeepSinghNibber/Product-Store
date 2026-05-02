import { Box, Spinner, Center } from '@chakra-ui/react'
import { Route, Routes, Navigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Navbar from './components/Navbar'
import { useAuthStore } from './store/auth'

const App = () => {
  const { authUser, authCheck, isCheckingAuth } = useAuthStore()

  useEffect(() => {
    authCheck()
  }, [authCheck])

  if (isCheckingAuth) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    )
  }

  return (
    <>
     <Box minH={'100vh'}>
      <Navbar />
        <Routes>
          <Route path = "/" element={authUser ? <HomePage/> : <Navigate to="/login" />}/>
          <Route path = "/create" element={authUser ? <CreatePage/> : <Navigate to="/login" />}/>
          <Route path = "/login" element={!authUser ? <LoginPage/> : <Navigate to="/" />}/>
          <Route path = "/signup" element={!authUser ? <SignupPage/> : <Navigate to="/" />}/>
        </Routes>
     </Box>
    </>
  )
}

export default App
