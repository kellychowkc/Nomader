import { Box, Button, Container, Text } from '@chakra-ui/react'
import React from 'react'

import { Link } from 'react-router-dom'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ControlPanel from './components/layoutControlPanel/ControlPanel'
import Landing from './components/layoutLanding/Landing'
import Login from './components/login/Login'

function App() {
    return (
        <div className="App">
            <Container>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/control" element={<ControlPanel />} />
                        {/* <Route path="/forum" element={<Forum />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/profile" element={<Profile />} /> */}
                    </Routes>
                </Router>
            </Container>
        </div>
    )
}

function Home() {
    return (
        <>
            <Text fontSize="4xl">Home</Text>
            <p></p>
            <Text fontSize="2xl">Link to ...</Text>
            <p></p>
            <Box
                as="button"
                borderRadius="md"
                bg="green"
                color="white"
                px={4}
                h={8}
            >
                <Link to="/landing">Landing</Link>
            </Box>
            <p></p>
            <Button as="a" href="/login" fontSize="lg">
                Login
            </Button>
            <p></p>

            <Box
                as="a"
                borderRadius="md"
                bg="tomato"
                color="white"
                px={4}
                h={8}
                href="/control"
            >
                Control
            </Box>
        </>
    )
}

export default App
