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

import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Welcome from './components/welcome/Welcome'
import Dashboard from './components/ControlPanel/contentDashboard/Dashboard'
import ControlPanel from './components/ControlPanel/ControlPanel'
import Landing from './components/layoutLanding/Landing'
import LayoutLogin from './components/layoutLogin/layoutLogin'
import SignUp from './components/auth/SignUp'
import Forum from './components/layoutForum/Forum'
import Dock from './components/common/dock/Dock'
import Login from './components/auth/Login'
import RequireAuth from './components/private/RequireAuth'
import InterestList from './components/matching/InterestList'

import { PhoneIcon } from '@chakra-ui/icons'
import { MdForum } from 'react-icons/md'
import Friends from './components/layoutFriends/Friends'
import Profile from './components/layoutProfile/Profile'
import Chat from './components/Chat/Chat'
import Home from './components/Home/Home'
import ManageUser from './components/ControlPanel/contentManageUser/ManageUser'
import Matching from './components/matching/Matching'
import MatchingSuccess from './components/matching/MatchingSuccess'
import NewPost from './components/layoutForum/NewPost'
import MatchingIndex from './components/matching/MatchingIndex'
import Contact from './components/layoutSafetyContact/SafetyContact'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="welcome" element={<Welcome />} />

                    <Route path="control" element={<ControlPanel />}>
                        <Route index element={<Dashboard />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="user" element={<ManageUser />} />
                        <Route path="forum" element={<ManageUser />} />
                    </Route>
                    <Route path="landing" element={<Landing />} />
                    <Route path="layoutlogin" element={<LayoutLogin />} />

                    {/* Required Auth Route */}
                    <Route path="contact" element={<RequireAuth />}>
                        <Route index element={<Contact />} />
                        <Route path="forum" element={<Forum />} />
                    </Route>

                    <Route path="login" element={<Login />} />

                    <Route path="signUp" element={<SignUp />} />
                    {/* <Route path="interest" element={<InterestList />} /> */}
                    <Route path="matching" element={<MatchingIndex />} />
                    <Route
                        path="matchingSuccess"
                        element={<MatchingSuccess />}
                    />
                    <Route path="newPost" element={<NewPost />} />
                    <Route path="welcome" element={<Welcome />} />

                    <Route path="signup" element={<SignUp />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="forum" element={<Forum />} />
                    <Route path="friends" element={<Friends />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="chat" element={<Chat />} />

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
        </>
    )
}

export function testHome() {
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
                                    <Link to="/welcome">
                                        Welcome (Box as Button + Link)
                                    </Link>
                                </Box>
                                <p></p>
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

                                <Box
                                    borderRadius="md"
                                    bg="pink"
                                    color="white"
                                    px={4}
                                    h={8}
                                >
                                    <Link to="/friends">
                                        Friends (Box + Link)
                                    </Link>
                                </Box>
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
