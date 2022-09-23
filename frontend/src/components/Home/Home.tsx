import React from 'react'
import {
    Box,
    Text,
    VStack,
    Flex,
    HStack,
    Icon,
    FormControl,
    Input,
    Avatar,
    useColorModeValue,
    Button,
} from '@chakra-ui/react'

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
import { FaSlidersH } from 'react-icons/fa'

import { Carousel } from '@trendyol-js/react-carousel'

import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'

import './Home.css'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthState } from '../../redux/state'
import InterestCard, { InterestCardData } from './interestCard'

const categories = [
    { name: 'location', icon: MdMap, path: '' },
    { name: 'exchange', icon: MdMoney, path: '' },
    { name: 'flight', icon: MdFlight, path: '' },
    { name: 'safety', icon: MdSecurity, path: 'contact' },
]

const interestList: InterestCardData[] = [
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
    {
        name: 'Interest #5',
        location: 'Location',
        city: 'City',
        country: 'Country',
        picture: 'pic/toronto-skyline.jpeg',
        like: true,
        rating: '-',
    },
    {
        name: 'Interest #6',
        location: 'Location',
        city: 'City',
        country: 'Country',
        picture: 'pic/canada3.jpeg',
        like: true,
        rating: '-',
    },
]

const Home = () => {
    const [search, setSearch] = React.useState('')
    const handleChange_search = (event: any) => setSearch(event.target.value)
    const windowWidth = window.innerWidth

    const auth: AuthState = useSelector((state: any) => state.auth)

    const navigate = useNavigate()

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
                    mb="3"
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <HStack
                        w="100%"
                        pt="15px"
                        m="0"
                        spacing={8}
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
                                size={{ base: 'lg', lg: 'xl' }}
                                src={auth.profile}
                                boxShadow={'0px 0px 6px #AAAAAA'}
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
                    <HStack
                        w="100%"
                        m="0"
                        spacing={{ base: 3, lg: 5 }}
                        justify="center"
                    >
                        <Flex
                            className="serachBar"
                            w="85%"
                            maxW={'2xl'}
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
                                        }}
                                        type="text"
                                        value={search}
                                        onChange={handleChange_search}
                                        border="0"
                                        fontSize={{ base: 'md', lg: 'lg' }}
                                        _focus={{
                                            outline: 'none',
                                            border: '0px',
                                        }}
                                    />
                                </FormControl>
                                <Icon
                                    as={MdSearch}
                                    h={{ base: '30px', lg: '35px' }}
                                    w={{ base: '30px', lg: '35px' }}
                                    _hover={{ cursor: 'pointer' }}
                                />
                            </HStack>
                        </Flex>
                        <Button
                            className="serachFilter"
                            w="55px"
                            h="55px"
                            px="3"
                            py="1"
                            borderRadius="10px"
                            bg={useColorModeValue('#B0D8BC', '#56C3E6')}
                            alignItems={'center'}
                            justifyContent={'center'}
                            boxShadow="0px 0px 9px 0px #BBBBBB"
                        >
                            <Icon
                                as={FaSlidersH}
                                h="30px"
                                w="30px"
                                color={useColorModeValue('#FFFFFF', 'gray.100')}
                            />
                        </Button>
                    </HStack>
                </Flex>
                <Flex
                    className="Category"
                    w="80vw"
                    pt={'10px'}
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <HStack
                        w="100%"
                        maxW="container.lg"
                        p="0"
                        mb="3"
                        justify="space-between"
                    >
                        <HStack>
                            <Text
                                fontSize="1.5em"
                                fontWeight="bold"
                                letterSpacing={'wide'}
                            >
                                Category
                            </Text>
                            <Icon as={MdLocalActivity} w="30px" h="30px" />
                        </HStack>

                        <HStack>
                            <Icon as={MdBookmarks} />
                            <Text fontWeight={'semibold'}>See All</Text>
                        </HStack>
                    </HStack>

                    <HStack
                        w="100%"
                        maxW="container.lg"
                        p="0"
                        mb="5"
                        justify="space-around"
                    >
                        {categories.map((category: any, idx: number) => (
                            <Button
                                key={idx}
                                w="22%"
                                h="fit-content"
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
                                    fontSize="1.5em"
                                    fontWeight="bold"
                                    letterSpacing={'wide'}
                                >
                                    Interest
                                </Text>
                                <Icon as={MdLocationPin} w="30px" h="30px" />
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Icon as={MdBookmarks} />
                                <Text fontWeight={'semibold'}>See All</Text>
                            </HStack>
                        </Box>
                    </HStack>

                    <HStack
                        className="carousel"
                        w={{ base: '97vw', lg: '98vw' }}
                        // maxW="container.lg"
                        p="0"
                        m="0"
                        justify="center"
                        align="center"
                        overflow={'visible'}
                    >
                        <Carousel
                            infinite={true}
                            show={Math.max(1.5, windowWidth / 400)}
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
