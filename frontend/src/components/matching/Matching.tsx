import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Center, Icon, Image, Wrap, WrapItem } from '@chakra-ui/react'
import { profileEnd } from 'console'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOtherUserProfile, OtherUserProfile } from '../../api/friend'

import { AuthState } from '../../redux/state'
import Dock from '../common/dock/Dock'
import styles from './Matching.module.css'

const { REACT_APP_API_SERVER } = process.env

function Matching() {
    const auth: AuthState = useSelector((state: any) => state.auth)
    const [profileList, setProfileList] = useState<[OtherUserProfile]>()
    const [profile, setProfile] = useState<OtherUserProfile>()
    const [defaultPic, setdefaultPic] = useState(true)
    const [successMatch, setSuccessMatch] = useState(true)
    const [likedUser, setLikedUser] = useState()

    const userId = auth.id

    useEffect(() => {
        try {
            fetchOtherUserProfile(userId as any as number).then((data: any) => {
                const userList = data.message.user
                console.log('check2')
                setLikedUser(data.message.waitMatchNum)
                setProfileList(
                    userList.map((user: OtherUserProfile) => ({
                        ...user,
                    }))
                )
                setProfile(userList[0])
                console.log('check')
            })
        } catch (err) {
            window.location.reload()
        }
    }, [])

    profileList?.forEach((user: OtherUserProfile) => {
        const interestList = user.interests
        for (let i = 0; i < interestList.length; i++) {
            interestList[i] = interestList[i].replace(/\s+/g, '')
        }
        console.log(interestList)
        if (user.profile === '') {
            return
        } else {
            const fileName = user.profile
            let path = `${REACT_APP_API_SERVER}/post/` + fileName
            user.profile = path
        }
    })

    // if (!(profile?.profile === '')) {
    //     setdefaultPic(!defaultPic)
    // }

    function unliked() {
        profileList!.shift()
        setProfileList(profileList)
        setProfile(profileList![0])
    }

    {
        profile?.interests.map((interest) => console.log(interest))
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.flexContainer}>
                {defaultPic ? (
                    <Image
                        src="https://bit.ly/dan-abramov"
                        alt="profile pic"
                        className={styles.profilePic}
                    />
                ) : (
                    <Image
                        src={profile?.profile}
                        alt="profile pic"
                        className={styles.profilePic}
                    />
                )}
            </div>
            <div className={styles.profileInfo}>
                <h1 className={styles.title}>{profile?.username}</h1>
                <h2 className={styles.subtitle}>
                    {' '}
                    {profile?.country_id} country
                </h2>
                <h2 className={styles.subtitle}> {profile?.jobTitle}</h2>
                <hr></hr>
                <h3 className={styles.bio}> {profile?.information}</h3>
                <hr></hr>

                <h3 className={styles.subtitle}> Interests </h3>
                <div className={styles.interestBox}>
                    <Wrap spacingX={8}>
                        {profile?.interests.map((interest) => (
                            <WrapItem key={interest}>
                                <Center w="82px" h="83px" overflow="hidden">
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
                <button className={styles.crossbtn} onClick={unliked}>
                    <Icon as={CloseIcon} w={6} h={6} />
                </button>
                <button className={styles.tickbtn}>
                    <Link to="/matchingSuccess">
                        <Icon as={CheckIcon} w={8} h={8} />
                    </Link>
                </button>
            </Box>
            <Dock />
        </div>
    )
}

export default Matching
