import React from 'react'
import {
    Box,
    Text,
    VStack,
    Flex,
    HStack,
    Image,
    Icon,
    FormControl,
    Input,
    Avatar,
    Center,
    Heading,
    Stack,
    useColorModeValue,
    Badge,
    Circle,
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'

import {
    MdFlight,
    MdMoney,
    MdMap,
    MdSearch,
    MdSecurity,
    MdBookmarks,
    MdLocationPin,
    MdLocalActivity,
} from 'react-icons/md'
import { FaHeart, FaSlidersH } from 'react-icons/fa'
import { Carousel } from '@trendyol-js/react-carousel'
import useWindowDimensions from '../windowDimension/WindowDimension'
import { useSelector } from 'react-redux'
import { AuthState } from '../../redux/state'

import './Home.css'
import { Link } from 'react-router-dom'

interface UserProfile {
    username: string
    user_type?: string
    avatar?: any
}

const user: UserProfile = {
    username: 'Danny',
    user_type: 'I am ~Admin~',
    avatar: 'https://avatars.dicebear.com/api/male/username.svg',
}

const categories = [
    { name: 'location', icon: MdMap, path: '' },
    { name: 'exchange', icon: MdMoney, path: '' },
    { name: 'flight', icon: MdFlight, path: '' },
    { name: 'safety', icon: MdSecurity, path: 'contact' },
]

const interestList: DisplayCardData[] = [
    {
        name: 'Interest #1',
        location: 'Location',
        city: 'City',
        country: 'Country',
        picture: 'pic/toronto-skyline.jpeg',
        like: true,
        rating: '-',
    },
    {
        name: 'Interest #2',
        location: 'Location',
        city: 'City',
        country: 'Country',
        picture: 'pic/canada3.jpeg',
        like: true,
        rating: '-',
    },
    {
        name: 'Interest #3',
        location: 'Location',
        city: 'City',
        country: 'Country',
        picture: 'pic/toronto-skyline.jpeg',
        like: true,
        rating: '-',
    },
    {
        name: 'Interest #4',
        location: 'Location',
        city: 'City',
        country: 'Country',
        picture: 'pic/canada3.jpeg',
        like: true,
        rating: '-',
    },
]

interface DisplayCardData {
    name: string
    location: string
    city: string
    country: string
    picture: string
    like: boolean
    rating: string
}

type DisplayProps = {
    data: DisplayCardData
    color: string
}

const DisplayCard = (props: DisplayProps) => (
    <Center py={5} mx={5} w="auto">
        <Box
            role={'group'}
            p={6}
            maxW={'400px'}
            w={['40vw', '40vw', '35vw', '35vw', '35vw']}
            bg={props.color}
            boxShadow={'xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
        >
            <Box
                rounded={'lg'}
                mt={-5}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 1,
                    left: 0,
                    backgroundImage: `url(${props.data.picture})`,
                    filter: 'blur(10px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(15px)',
                    },
                }}
            >
                <Image
                    rounded={'lg'}
                    height={230}
                    width={'full'}
                    objectFit={'cover'}
                    src={props.data.picture}
                />
            </Box>
            <Stack pt={5} align={'flex-start'} position="relative">
                <Icon
                    as={FaHeart}
                    position="absolute"
                    top="7"
                    right="2"
                    size="2em"
                />
                <Heading
                    fontSize={'xl'}
                    fontFamily={'body'}
                    fontWeight={'bold'}
                >
                    {props.data.name}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text color={'gray.600'}>
                        {props.data.location},{props.data.city},
                        {props.data.country}
                    </Text>
                </Stack>
            </Stack>
        </Box>
    </Center>
)

const Home = () => {
    const [search, setSearch] = React.useState('')
    const handleChange_search = (event: any) => setSearch(event.target.value)
    const { height, width } = useWindowDimensions()

    const auth: AuthState = useSelector((state: any) => state.auth)

    const interestColor = useColorModeValue('white', 'gray.800')

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
                    className="Top"
                    w="80vw"
                    mb="3"
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <HStack w="80%" py="5" m="0" justify="space-around">
                        <VStack px="5" mx="0" align="flex-start">
                            <HStack color="#B0D8BC">
                                <Text fontSize="2em" fontWeight="bold">
                                    Hello,
                                </Text>
                                <Text fontSize="2.5em" fontWeight="bold">
                                    {auth.username}
                                </Text>
                            </HStack>

                            <Text fontSize="md">Where are you heading?</Text>
                        </VStack>
                        <Box p="5" mx="0">
                            <Avatar
                                className="avatar"
                                size="lg"
                                src={user.avatar}
                                // boxShadow={[
                                //     '0px 0px 5px #FFF',
                                //     '0px 0px 10px #F0F',
                                //     '0px 0px 15px #0FF',
                                //     '0px 0px 20px #FF0',
                                // ]}
                            ></Avatar>
                        </Box>
                    </HStack>
                </Flex>
                <Flex
                    className="Search"
                    w="80vw"
                    mb="10px"
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <HStack w="95%" m="0" justify="space-between">
                        <Flex
                            w="85%"
                            h="50px"
                            px="3"
                            py="1"
                            borderRadius="10px"
                            boxShadow="0px 0px 9px #BBBBBB"
                            bg={useColorModeValue('gray.100', 'gray.400')}
                            align={'center'}
                            justify={'center'}
                        >
                            <HStack w="100%" justify="space-between" p="3px">
                                <FormControl id="search" isRequired>
                                    <Input
                                        placeholder="Search..."
                                        _placeholder={{
                                            color: 'gray.900',
                                            fontSize: 'md',
                                        }}
                                        type="text"
                                        value={search}
                                        onChange={handleChange_search}
                                        border="0"
                                        _focus={{
                                            outline: 'none',
                                            border: '0px',
                                        }}
                                    />
                                </FormControl>
                                <Icon as={MdSearch} h="30px" w="30px" />
                            </HStack>
                        </Flex>
                        <Flex
                            w="55px"
                            h="55px"
                            px="3"
                            py="1"
                            borderRadius="10px"
                            bg={useColorModeValue('#B0D8BC', '#56C3E6')}
                            align={'center'}
                            justify={'center'}
                            boxShadow="0px 0px 9px 0px #BBBBBB"
                        >
                            <Icon
                                as={FaSlidersH}
                                h="30px"
                                w="30px"
                                color={useColorModeValue('#FFFFFF', 'gray.100')}
                            />
                        </Flex>
                    </HStack>
                </Flex>
                <Flex
                    className="Category"
                    w="80vw"
                    mb="5"
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <HStack w="100%" p="1" mb="3" justify="space-between">
                        <HStack>
                            <Text fontSize="1.5em" fontWeight="bold">
                                Category
                            </Text>
                            <Icon as={MdLocalActivity} w="30px" h="30px" />
                        </HStack>

                        <HStack>
                            <Icon as={MdBookmarks} />
                            <Text>See All</Text>
                        </HStack>
                    </HStack>

                    <HStack w="100%" p="0" m="0" justify="space-around">
                        {categories.map((category: any, idx: number) => (
                            <Flex
                                key={idx}
                                w="22%"
                                py={['3', '3', '3', '4', '5']}
                                border="0"
                                borderRadius="10px"
                                justify="center"
                                boxShadow="0px 0px 9px #AAAAAA"
                                bgGradient="linear(to-r, #56C3E6, #B0D8BC)"
                            >
                                <Link to={category.path}>
                                    <Icon
                                        as={category.icon}
                                        h={[
                                            '30px',
                                            '40px',
                                            '50px',
                                            '60px',
                                            '60px',
                                        ]}
                                        w={[
                                            '30px',
                                            '40px',
                                            '50px',
                                            '60px',
                                            '60px',
                                        ]}
                                        color="#FFFFFF"
                                    />
                                </Link>
                            </Flex>
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
                    <HStack w="100%" p="1" mb="3" justify="space-between">
                        <Box>
                            <HStack>
                                <Text fontSize="1.5em" fontWeight="bold">
                                    Interest
                                </Text>
                                <Icon as={MdLocationPin} w="30px" h="30px" />
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Icon as={MdBookmarks} />
                                <Text>See All</Text>
                            </HStack>
                        </Box>
                    </HStack>

                    <HStack
                        w="100%"
                        p="0"
                        m="0"
                        justify="center"
                        align="center"
                        overflow={'visible'}
                    >
                        <Carousel
                            show={width / 350}
                            slide={width / (350 * 0.9)}
                            swiping={true}
                            responsive={true}
                        >
                            {interestList.map((item, idx: any) => (
                                <DisplayCard
                                    key={idx}
                                    data={item}
                                    color={interestColor}
                                />
                            ))}
                        </Carousel>
                    </HStack>
                </Flex>
            </VStack>
            <Dock />
        </Box>
    )
}

export default Home
