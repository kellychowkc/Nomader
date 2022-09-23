import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Center, Icon, Image, Wrap, WrapItem } from '@chakra-ui/react'
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
    const [profileList, setProfileList] = useState<OtherUserProfile>()

    const userId = auth.id

    useEffect(() => {
        fetchOtherUserProfile(userId as any as number).then((data: any) => {
            console.log(data.message)
            // const dataDetail = data.userDetail.rows[0]
            // const profilePath =
            //     `${REACT_APP_API_SERVER}/profile/` + dataDetail.profile
            // dataDetail.profile = profilePath
            // setProfileList(dataDetail)
        })
    }, [])
    return (
        <div className={styles.profileContainer}>
            <div className={styles.flexContainer}>
                <Image
                    src="https://bit.ly/dan-abramov"
                    alt="profile pic"
                    className={styles.profilePic}
                />
            </div>
            <div className={styles.profileInfo}>
                <h1 className={styles.title}>Username</h1>
                <h2 className={styles.subtitle}> Country</h2>
                <h2 className={styles.subtitle}> Job</h2>
                <hr></hr>
                <h3 className={styles.bio}> Bio Caption</h3>
                <hr></hr>

                <h3 className={styles.subtitle}> Interests </h3>
                <div className={styles.interestBox}>
                    <Wrap spacingX={8}>
                        <WrapItem>
                            <Center w="82px" h="83px" overflow="hidden">
                                <img
                                    src={require('../../assets/interests/busking.png')}
                                    alt="interest"
                                ></img>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="82px" h="83px" overflow="hidden">
                                <img
                                    src={require('../../assets/interests/camping.png')}
                                    alt="interest"
                                ></img>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="82px" h="83px" overflow="hidden">
                                <img
                                    src={require('../../assets/interests/cycling.png')}
                                    alt="interest"
                                ></img>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="82px" h="83px" overflow="hidden">
                                <img
                                    src={require('../../assets/interests/diving.png')}
                                    alt="interest"
                                ></img>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="82px" h="83px" overflow="hidden">
                                <img
                                    src={require('../../assets/interests/event.png')}
                                    alt="interest"
                                ></img>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="82px" h="83px" overflow="hidden">
                                <img
                                    src={require('../../assets/interests/foodie.png')}
                                    alt="interest"
                                ></img>
                            </Center>
                        </WrapItem>
                    </Wrap>
                </div>
            </div>
            <Box className={styles.btnBox}>
                <button className={styles.crossbtn}>
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
