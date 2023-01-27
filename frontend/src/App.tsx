import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Suspense } from 'react'
import ReactLoading from 'react-loading'

//import component
const Welcome = React.lazy(() => import('./components/welcome/Welcome'))
const Dashboard = React.lazy(
    () => import('./components/admin/contentDashboard/Dashboard')
)
const ControlPanel = React.lazy(() => import('./components/admin/ControlPanel'))
const Landing = React.lazy(() => import('./components/landingPage/Landing'))
const SignUp = React.lazy(() => import('./components/auth/SignUp'))
const Forum = React.lazy(() => import('./components/forum/Forum'))
const Login = React.lazy(() => import('./components/auth/Login'))
const RequireAuth = React.lazy(() => import('./components/auth/RequireAuth'))
const InterestList = React.lazy(
    () => import('./components/matching/InterestList')
)
const Friends = React.lazy(() => import('./components/friends/Friends'))
const Profile = React.lazy(() => import('./components/profile/Profile'))
const Home = React.lazy(() => import('./components/home/Home'))
const ManageUser = React.lazy(
    () => import('./components/admin/contentManageUser/ManageUser')
)
const Matching = React.lazy(() => import('./components/matching/Matching'))
const MatchingSuccess = React.lazy(
    () => import('./components/matching/MatchingSuccess')
)
const NewPost = React.lazy(() => import('./components/forum/NewPost'))
const MatchingIndex = React.lazy(
    () => import('./components/matching/MatchingIndex')
)
const Skyscanner = React.lazy(() => import('./components/home/Skyscanner'))
const Exchange = React.lazy(() => import('./components/home/Exchange'))
const EditProfile = React.lazy(() => import('./components/profile/EditProfile'))
const Attraction = React.lazy(() => import('./components/home/Attraction'))
const ChatHome = React.lazy(() => import('./components/chat/ChatHome'))
const ChatRoom = React.lazy(() => import('./components/chat/ChatRoom'))
const Currency = React.lazy(() => import('./components/home/Currency'))
const SafetyContact = React.lazy(
    () => import('./components/home/SafetyContact')
)
const EditInterest = React.lazy(
    () => import('./components/profile/EditInterest')
)

function App() {
    return (
        <>
            <React.Suspense
                fallback={
                    <ReactLoading
                        type={'balls'}
                        color={'#0DAD8D'}
                        height={'50%'}
                        width={'50%'}
                    />
                }
            >
                <Router>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="welcome" element={<Welcome />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signUp" element={<SignUp />} />

                        {/* Required Auth Route */}
                        <Route path="/" element={<RequireAuth />}>
                            <Route path="home" element={<Home />} />
                            <Route path="attraction" element={<Attraction />} />
                            <Route path="airline" element={<Skyscanner />} />
                            <Route path="currency" element={<Currency />} />
                            <Route path="exchange" element={<Exchange />} />
                            <Route path="contact" element={<SafetyContact />} />
                            <Route path="forum" element={<Forum />} />
                            <Route
                                path="matchingIndex"
                                element={<MatchingIndex />}
                            />
                            <Route path="interest" element={<InterestList />} />
                            <Route path="matching" element={<Matching />} />
                            <Route
                                path="matchingSuccess"
                                element={<MatchingSuccess />}
                            />
                            <Route path="newPost" element={<NewPost />} />
                            <Route path="friends" element={<Friends />} />
                            <Route path="profile" element={<Profile />} />
                            <Route
                                path="editProfile"
                                element={<EditProfile />}
                            />
                            <Route
                                path="editInterest"
                                element={<EditInterest />}
                            />
                            <Route path="chat" element={<ChatHome />} />
                            <Route
                                path="chat/:room_id"
                                element={<ChatRoom />}
                            />
                            <Route path="control" element={<ControlPanel />}>
                                <Route index element={<Dashboard />} />
                                <Route
                                    path="dashboard"
                                    element={<Dashboard />}
                                />
                                <Route path="user" element={<ManageUser />} />
                                <Route path="forum" element={<ManageUser />} />
                            </Route>
                        </Route>

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
            </React.Suspense>
        </>
    )
}

export default App
