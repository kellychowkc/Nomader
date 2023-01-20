import { Button } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Welcome from './components/welcome/Welcome'
import Dashboard from './components/admin/contentDashboard/Dashboard'
import ControlPanel from './components/admin/ControlPanel'
import Landing from './components/landing/Landing'
import SignUp from './components/auth/SignUp'
import Forum from './components/forum/Forum'
import Login from './components/auth/Login'
import RequireAuth from './components/auth/RequireAuth'
import InterestList from './components/matching/InterestList'

import Friends from './components/friends/Friends'
import Profile from './components/profile/Profile'
import Home from './components/homePage/Home'
import ManageUser from './components/admin/contentManageUser/ManageUser'
import Matching from './components/matching/Matching'
import MatchingSuccess from './components/matching/MatchingSuccess'
import NewPost from './components/forum/NewPost'
import MatchingIndex from './components/matching/MatchingIndex'
import Skyscanner from './components/homePage/Skyscanner'
import EditProfile from './components/profile/EditProfile'
import Attraction from './components/homePage/Attraction'
import ChatHome from './components/chat/ChatHome'
import ChatRoom from './components/chat/chatroom/ChatRoom'
import Currency from './components/homePage/Currency'
import SafetyContact from './components/safetyContact/SafetyContact'
import EditInterest from './components/profile/EditInterest'

function App() {
    return (
        <>
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
                        <Route path="editProfile" element={<EditProfile />} />
                        <Route path="editInterest" element={<EditInterest />} />
                        <Route path="chat" element={<ChatHome />} />
                        <Route path="chat/:room_id" element={<ChatRoom />} />
                        <Route path="control" element={<ControlPanel />}>
                            <Route index element={<Dashboard />} />
                            <Route path="dashboard" element={<Dashboard />} />
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
        </>
    )
}

export default App
