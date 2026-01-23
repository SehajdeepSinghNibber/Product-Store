import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import {Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import CreatePage from './pages/CreatePage.jsx'
import HomePage from './pages/HomePage.jsx'

const App = () => {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
        <Navbar />
        <Routes>
          <Route path ="/" element = {<HomePage />}/>
          <Route path ="/create" element = {<CreatePage />}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
