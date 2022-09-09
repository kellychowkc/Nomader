import { PhoneIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    Container,
    Square,
    Text,
    VStack,
    Image,
    Flex,
    Center,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/contentDashboard/Dashboard'
import Contact from './components/layoutSafetyContact/SafetyContact'
import ControlPanel from './components/layoutControlPanel/ControlPanel'
import Landing from './components/layoutLanding/Landing'
import LayoutLogin from './components/layoutLogin/layoutLogin'
import SignUp from './components/layoutSignUp/layoutSignUp'
import Forum from './components/layoutForum/Forum'
import { MdForum } from 'react-icons/md'
import Dock from './components/common/dock/Dock'
import Login from './components/auth/Login'

function App() {
    return (
        <Container minW="270px" p="0" border="0" centerContent>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="control/"
                        element={<ControlPanel children={<Dashboard />} />}
                    >
                        <Route
                            path="user"
                            element={<ControlPanel children={<Dashboard />} />}
                        />
                    </Route>
                    <Route path="landing" element={<Landing />} />
                    <Route path="layoutlogin" element={<LayoutLogin />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="forum" element={<Forum />} />
                    {/* <Route path="/friend" element={<Friend />} />
                        <Route path="/chat" element={<Chat />} /> */}

                    {/* <Route path="/forum" element={<Forum />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/profile" element={<Profile />} /> */}

                    <Route
                        path="*"
                        element={
                            <>
                                404 : Page Not Found
                                <p></p>
                                <Button>
                                    <Link to="/">Back to Home</Link>
                                </Button>
                            </>
                        }
                    />
                </Routes>
            </Router>
        </Container>
    )
}

function Home() {
    return (
        <>
            <Container w="full" h="full" centerContent>
                <Flex
                    w="auto"
                    h="auto"
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <Flex
                        w="full"
                        h="auto"
                        mb="3"
                        direction="column"
                        justify="center"
                        align="center"
                    >
                        <Text fontSize="4xl">Nomader Home Page</Text>
                        <p></p>
                        <Text fontSize="2xl">
                            Select Link Below to Redirect
                        </Text>
                        <p></p>
                        <Flex
                            w="100%"
                            h="600px"
                            direction="column"
                            justify="center"
                            align="center"
                            m="0"
                            border="0"
                            p="0"
                        >
                            <Image
                                w="450px"
                                h="450px"
                                src="/temp/pngtree-red-couplet-in-diamond-shape-png-image_7253655.png"
                                sx={{ filter: 'blur(8px)' }}
                                zIndex="-1"
                                position="absolute"
                                top="100%/2"
                                left="100%/2"
                                fit="contain"
                            />
                            <VStack>
                                <Box
                                    as="button"
                                    borderRadius="md"
                                    bg="green"
                                    color="white"
                                    px={4}
                                    h={8}
                                >
                                    <Link to="/landing">
                                        Landing (Box as Button + Link)
                                    </Link>
                                </Box>
                                <p></p>
                                <Box
                                    borderRadius="md"
                                    bg="green"
                                    color="white"
                                    px={4}
                                    h={8}
                                >
                                    <Link to="/layoutlogin">
                                        Fake Login (Box + Link)
                                    </Link>
                                </Box>
                                <p></p>
                                <Button as="a" href="/login" fontSize="lg">
                                    Login (Button as a)
                                </Button>
                                <p></p>
                                <Button fontSize="lg">
                                    <Link to="/signup">
                                        Signup (Button + Link)
                                    </Link>
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
                                    Control (Box as a with href)
                                </Box>
                                <Center
                                    h="80px"
                                    w="200px"
                                    bg="pink.700"
                                    color="white"
                                >
                                    <Link to={'/contact'}>
                                        Safety Contact <p></p>(Center + Link)
                                        <PhoneIcon />
                                    </Link>
                                </Center>
                                <Square
                                    size="100px"
                                    bg="purple.700"
                                    color="white"
                                >
                                    <Link to={'/forum'}>
                                        Forum <MdForum />
                                        <p></p>(Square + Link)
                                    </Link>
                                </Square>
                            </VStack>
                        </Flex>
                    </Flex>
                    <Dock />
                </Flex>
            </Container>
        </>
    )
}

export default App
