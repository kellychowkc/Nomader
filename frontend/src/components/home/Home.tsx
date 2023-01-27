import React, { useEffect } from 'react'
import {
    Box,
    Text,
    VStack,
    Flex,
    HStack,
    Icon,
    Avatar,
    Button,
} from '@chakra-ui/react'

import {
    MdFlight,
    MdMoney,
    MdMap,
    MdSecurity,
    MdLocationPin,
    MdLocalActivity,
} from 'react-icons/md'

import { Carousel } from '@trendyol-js/react-carousel'

import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'

import './Home.css'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthState } from '../../redux/state'
import InterestCard, { InterestCardData } from './InterestCard'
import { fetchSelfUserProfile } from '../../api/user'

const { REACT_APP_API_SERVER } = process.env

const categories = [
    { name: 'attraction', icon: MdMap, path: '/attraction' },
    { name: 'exchange', icon: MdMoney, path: '/exchange' },
    { name: 'flight', icon: MdFlight, path: '/airline' },
    { name: 'safety', icon: MdSecurity, path: '/contact' },
]

const interestList: InterestCardData[] = [
    {
        name: 'Peak',
        city: 'Hong Kong',
        country: 'China',
        picture: 'peak.jpeg',
        like: true,
        rating: '-',
        link: 'https://www.discoverhongkong.com/hk-eng/explore/attractions/best-vantage-points-on-peak.html',
    },
    {
        name: 'Disneyland',
        city: 'Hong Kong',
        country: 'China',
        picture: 'disney.jpeg',
        like: true,
        rating: '-',
        link: 'https://www.discoverhongkong.com/hk-eng/interactive-map/hong-kong-disneyland.html',
    },
    {
        name: 'Hollywood',
        city: 'Los Angeles',
        country: 'US',
        picture: 'hollywood.jpeg',
        like: true,
        rating: '-',
        link: 'https://www.visittheusa.com/experience/insiders-guide-hollywood',
    },
    {
        name: 'Golden Gate',
        city: 'San Francisco',
        country: 'US',
        picture: 'golden.jpeg',
        like: true,
        rating: '-',
        link: 'https://www.visittheusa.com/destination/san-francisco',
    },
    {
        name: 'London Eye',
        city: 'London',
        country: 'UK',
        picture: 'london.jpeg',
        like: true,
        rating: '-',
        link: 'https://www.visitbritain.com/gb/en/england/london',
    },
    {
        name: 'Oxford',
        city: 'Oxford',
        country: 'UK',
        picture: 'oxford.jpeg',
        like: true,
        rating: '-',
        link: 'https://www.visitbritain.com/gb/en/england/central-england/oxford',
    },
]

const Home = () => {
    const [profilePic, setProfilePic] = React.useState<string>()

    const windowWidth = window.innerWidth
    const auth: AuthState = useSelector((state: any) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        fetchSelfUserProfile(auth.id as any as number).then((data: any) => {
            const dataDetail = data.userDetail.rows[0]
            const profile = dataDetail.profile
            if (!profile) {
                return
            }
            const profilePath = `${REACT_APP_API_SERVER}/profile/` + profile
            setProfilePic(profilePath)
        })
    }, [auth])

    return (
        <Box
            w="auto"
            h="full"
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            {/* === NavBar === */}
            <Nav />

            <VStack w="100%">
                <Flex
                    className="greeting"
                    w="80vw"
                    mb="2"
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <HStack
                        w="100%"
                        pt="15px"
                        m="0"
                        spacing={3}
                        justify={{ base: 'space-around', lg: 'center' }}
                    >
                        <VStack
                            className="displayName"
                            px="5px"
                            mx="0"
                            align="flex-start"
                        >
                            <HStack color="#B0D8BC" align={'baseline'}>
                                <Text
                                    fontSize={{ base: '1.5em', lg: '2.5em' }}
                                    fontWeight="bold"
                                >
                                    Hello,
                                </Text>
                                <Text
                                    fontSize={{ base: '2em', lg: '3em' }}
                                    fontWeight="bolder"
                                    textTransform={'uppercase'}
                                    whiteSpace={'break-spaces'}
                                >
                                    {auth.username}
                                </Text>
                            </HStack>

                            <Text
                                fontSize={{ base: '1em', lg: '1.2em' }}
                                fontWeight="medium"
                                letterSpacing={'wide'}
                                whiteSpace={'nowrap'}
                            >
                                Where are you heading?
                            </Text>
                        </VStack>
                        <Box className="avatar" p="10px" mx="0">
                            <Avatar
                                name={auth.username}
                                size={{ base: 'xl', lg: 'xl' }}
                                src={profilePic as any as string}
                                boxShadow={'0px 0px 6px #AAAAAA'}
                            ></Avatar>
                        </Box>
                    </HStack>
                </Flex>

                <Flex
                    className="Category"
                    w="80vw"
                    pt={'3%'}
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <HStack
                        w="100%"
                        maxW="container.lg"
                        p="0"
                        mb="1rem"
                        justify="space-between"
                    >
                        <HStack>
                            <Text
                                fontSize={{ base: '1.5em', lg: '2.5em' }}
                                fontWeight="bold"
                                letterSpacing={'wide'}
                            >
                                Category
                            </Text>
                            <Icon as={MdLocalActivity} w="20%" h="20%" />
                        </HStack>
                    </HStack>

                    <HStack
                        h="100%"
                        w="100%"
                        maxW="container.lg"
                        p="1"
                        mb="2"
                        justify="space-around"
                    >
                        {categories.map((category: any, idx: number) => (
                            <Button
                                key={idx}
                                w="80%"
                                h="80%"
                                py={['3', '3', '3', '4', '4']}
                                border="0"
                                borderRadius="10px"
                                justifyContent="center"
                                boxShadow="0px 0px 9px #AAAAAA"
                                bgGradient="linear(to-r, #56C3E6, #B0D8BC)"
                                onClick={() => navigate(category.path)}
                            >
                                <Link to={category.path}>
                                    <Icon
                                        as={category.icon}
                                        h={[
                                            '30px',
                                            '40px',
                                            '50px',
                                            '60px',
                                            '65px',
                                        ]}
                                        w={[
                                            '30px',
                                            '40px',
                                            '50px',
                                            '60px',
                                            '65px',
                                        ]}
                                        color="#FFFFFF"
                                    />
                                </Link>
                            </Button>
                        ))}
                    </HStack>
                </Flex>
                <Flex
                    className="Interest"
                    w="80vw"
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <HStack
                        w="100%"
                        maxW="container.lg"
                        p="0"
                        mb="0"
                        justify="space-between"
                    >
                        <Box>
                            <HStack>
                                <Text
                                    fontSize={{ base: '1.5em', lg: '2.5em' }}
                                    fontWeight="bold"
                                    letterSpacing={'wide'}
                                >
                                    Features
                                </Text>
                                <Icon as={MdLocationPin} w="20%" h="20%" />
                            </HStack>
                        </Box>
                    </HStack>

                    <HStack
                        className="carousel"
                        w={{ base: '97vw', lg: '98vw' }}
                        p="0"
                        m="0"
                        justify="center"
                        align="center"
                        overflow={'visible'}
                    >
                        <Carousel
                            infinite={true}
                            show={Math.max(1.5, windowWidth / 300)}
                            slide={2.5}
                            swiping={true}
                            responsive={true}
                        >
                            {interestList.map(
                                (item: InterestCardData, idx: any) => (
                                    <InterestCard key={idx} data={item} />
                                )
                            )}
                        </Carousel>
                    </HStack>
                </Flex>
            </VStack>
            <Dock />
        </Box>
    )
}

export default Home
