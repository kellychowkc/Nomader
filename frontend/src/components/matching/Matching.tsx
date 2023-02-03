import { CheckIcon, CloseIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Icon, Wrap, WrapItem } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import {
    fetchOtherUserProfile,
    likedUserAction,
    openChat,
    unlikedUserAction,
} from '../../api/friend'

import type { OtherUserProfile } from '../../api/friend'

import { AuthState } from '../../redux/state'
import Dock from '../common/dock/Dock'
import styles from './Matching.module.css'
import Nav from '../common/navBar/NavBar'
import Loading from '../common/Loading'
import SideMenu from '../common/sideMenu/SideMenu'

const { REACT_APP_API_SERVER } = process.env

function Matching() {
    const windowWidth = window.innerWidth
    const auth: AuthState = useSelector((state: any) => state.auth)
    const [profileList, setProfileList] = useState<[OtherUserProfile]>()
    const [profile, setProfile] = useState<OtherUserProfile>()
    const [likedUser, setLikedUser] = useState(2)
    const [likedUserId, setLikedUserId] = useState<number[]>()
    const [profileDefault, setProfileDefault] = useState(true)
    const [applyMatch, setApplyMatch] = useState<Boolean[]>()

    const navigate = useNavigate()

    const userId = auth.id

    useEffect(() => {
        try {
            fetchOtherUserProfile(userId as any as number).then((data: any) => {
                const userList = data.message.user
                console.log('check', userList)
                setLikedUser(data.message.waitMatchNum)

                userList?.forEach((user: OtherUserProfile) => {
                    const interestList = user.interests
                    console.log(interestList)
                    for (let i = 0; i < interestList.length; i++) {
                        interestList[i] = interestList[i].replace(/\s+/g, '')
                    }
                    if (user.profile === '') {
                        return
                    } else {
                        const fileName = user.profile
                        let path = `${REACT_APP_API_SERVER}/profile/` + fileName
                        user.profile = path
                    }

                    if (user.gender === 'Female') {
                        setProfileDefault(true)
                    } else {
                        setProfileDefault(false)
                    }
                })

                setProfileList(
                    userList.map((user: OtherUserProfile) => ({
                        ...user,
                    }))
                )

                setProfile(userList[0])

                let likedUserIdList: number[] = []
                if (likedUser === 2) {
                    likedUserIdList.push(userList[0].id)
                    likedUserIdList.push(userList[1].id)
                    setLikedUserId(likedUserIdList)
                    setApplyMatch([true, true])
                } else if (likedUser === 1) {
                    likedUserIdList.push(userList[0].id)
                    setLikedUserId(likedUserIdList)
                    setApplyMatch([true])
                } else {
                    setApplyMatch([])
                    return
                }
            })
        } catch (err) {
            window.location.reload()
        }
    }, [])

    function unliked() {
        unlikedUserAction(userId!, profile!.id).then((data: any) => {
            console.log(data)
        })
        if (profileList!.length === 1) {
            navigate('/matchingBlock')
        }
        if (applyMatch) {
            applyMatch.shift()
            console.log(applyMatch)
        }

        profileList!.shift()
        setProfile(profileList![0])
        setProfileDefault(!profileDefault)
    }

    function liked() {
        likedUserAction(userId!, profile!.id).then((data: any) => {
            console.log(data)
        })
        if (applyMatch) {
            applyMatch.shift()
            console.log(applyMatch)
        }
        console.log(userId, profile?.id)
        if (profileList!.length === 1) {
            navigate('/matchingBlock')
        }
        if (likedUser === 2 || likedUser === 1) {
            likedUserId?.forEach((id) => {
                if (id === profile?.id) {
                    openChat(userId!, profile.id).then((data) => {
                        console.log('chat', data)
                    })
                    Swal.fire({
                        title: 'Match!',
                        text: `Please go to chat room now!`,
                        icon: 'success',
                    })
                    navigate('/chat')
                }
            })
            profileList!.shift()
            setProfile(profileList![0])
            setProfileDefault(!profileDefault)
        } else {
            profileList!.shift()
            setProfile(profileList![0])
            setProfileDefault(!profileDefault)
        }
    }

    return (
        <div>
            <Nav />
            <div className={styles.matchingBody}>
                {windowWidth > 850 ? <SideMenu /> : <></>}

                {!profileList ? (
                    <Loading />
                ) : (
                    <div className={styles.profileContainer}>
                        <div className={styles.flexContainer}>
                            {profileDefault ? (
                                <img
                                    src={require(`../../assets/profile2.jpg`)}
                                    alt="profile pic"
                                    className={styles.profilePic}
                                ></img>
                            ) : (
                                <img
                                    src={require(`../../assets/profile.1.jpg`)}
                                    alt="profile pic"
                                    className={styles.profilePic}
                                ></img>
                            )}
                        </div>

                        <div className={styles.profileInfo}>
                            <div className={styles.infoBox}>
                                <h1 className={styles.title}>
                                    {profile?.username}
                                </h1>
                                {applyMatch?.length ? (
                                    <h2 className={styles.lovelytitle}>
                                        picked you💕
                                    </h2>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div className={styles.infoBox}>
                                <h2 className={styles.subtitle}>
                                    From: {profile?.country}
                                </h2>
                            </div>
                            <div className={styles.infoBox}>
                                <h2 className={styles.subtitle}>
                                    Job: {profile?.jobTitle}
                                </h2>
                            </div>
                            <hr></hr>

                            <h3 className={styles.bio}>
                                {' '}
                                {profile?.information}
                            </h3>

                            <hr></hr>

                            <h3 className={styles.subtitle}> Interests </h3>
                            <div className={styles.interestBox}>
                                <Wrap spacingX={1}>
                                    {profile?.interests.map((interest) => (
                                        <WrapItem
                                            key={interest}
                                            className={styles.interestContainer}
                                        >
                                            <h3
                                                className={styles.interestTitle}
                                            >
                                                {interest}
                                            </h3>
                                            <Center
                                                w="80px"
                                                h="80px"
                                                overflow="hidden"
                                            >
                                                <img
                                                    src={require(`../../assets/interests/${interest}.png`)}
                                                    alt="interest"
                                                ></img>
                                            </Center>
                                        </WrapItem>
                                    ))}
                                </Wrap>
                            </div>
                        </div>
                        <Box className={styles.btnBox}>
                            <Button
                                className={styles.crossbtn}
                                onClick={unliked}
                                borderRadius="full"
                                bgImage={
                                    'linear-gradient(to right,#569ee6,  #b0d8bc)'
                                }
                                boxSize={'4em'}
                            >
                                <Icon as={CloseIcon} boxSize={'1.5em'} />
                            </Button>
                            <Button
                                className={styles.tickbtn}
                                onClick={liked}
                                borderRadius="full"
                                bgImage={
                                    'linear-gradient(to right,#569ee6, #67d6f8, #b0d8bc)'
                                }
                                boxSize={'4em'}
                            >
                                <Icon as={CheckIcon} boxSize={'2em'} />
                            </Button>
                        </Box>
                    </div>
                )}
            </div>
            {windowWidth > 850 ? <></> : <Dock />}
        </div>
    )
}

export default Matching
