import React from 'react'
import {
    Box,
    Text,
    Container,
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
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'

import {
    MdFlight,
    MdMoney,
    MdMap,
    MdSearch,
    MdFilterList,
    MdSecurity,
    MdBookmarks,
    MdLocationPin,
    MdLocalActivity,
    MdAdjust,
    MdLegendToggle,
    MdOutlineFilter,
    MdOutlineFilter4,
    MdOutlineFilter1,
    MdOutlineFilter2,
    MdOutlineFilter3,
} from 'react-icons/md'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { FaAdjust, FaHeart, FaSlidersH } from 'react-icons/fa'
import { BsController } from 'react-icons/bs'
import { FiFilter } from 'react-icons/fi'

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
    { name: 'location', icon: MdMap },
    { name: 'exchange', icon: MdMoney },
    { name: 'flight', icon: MdFlight },
    { name: 'safety', icon: MdSecurity },
]

const Home = () => {
    const [search, setSearch] = React.useState('')
    const handleChange_search = (event: any) => setSearch(event.target.value)
    return (
        <Container w="full" h="full" maxW="max" p="0">
            <Flex
                w="full"
                h="full"
                direction="column"
                justify="center"
                align="center"
            >
                {/* === NavBar === */}
                <Nav />

                <VStack w="98vw">
                    <Flex
                        className="Top"
                        w="80vw"
                        mb="3"
                        direction="column"
                        justify="center"
                        align="center"
                    >
                        <HStack w="80%" p="0" m="0" justify="space-around">
                            <VStack px="5" mx="0">
                                <Text
                                    fontSize="2em"
                                    fontWeight="bold"
                                    as={'span'}
                                    position={'relative'}
                                >
                                    Hello,
                                    <Text
                                        fontSize="1.2em"
                                        fontWeight="bold"
                                        as={'span'}
                                        position={'relative'}
                                        _after={{
                                            content: "''",
                                            width: 'full',
                                            height: '30%',
                                            position: 'absolute',
                                            bottom: 1,
                                            left: 0,
                                            bgGradient:
                                                'linear(to-r, #56C3E6, #B0D8BC)',
                                            zIndex: -1,
                                        }}
                                    >
                                        {user.username}
                                    </Text>
                                </Text>
                                <Text fontSize="md">
                                    Where are you heading?
                                </Text>
                            </VStack>
                            <Box p="5" mx="0">
                                <Avatar
                                    size="lg"
                                    name={user.username}
                                    backgroundImage={user.avatar}
                                    boxShadow={[
                                        '0px 0px 10px #FFF',
                                        '0px 0px 10px #F0F',
                                        '0px 0px 15px #0FF',
                                    ]}
                                >
                                    {/* <Image src={user.avatar} /> */}
                                </Avatar>
                            </Box>
                        </HStack>
                    </Flex>
                    <Flex
                        className="Search"
                        w="80vw"
                        mb="5"
                        direction="column"
                        justify="center"
                        align="center"
                    >
                        <HStack w="100%" m="0" justify="space-between">
                            <Flex
                                w="85%"
                                h="50px"
                                px="3"
                                py="1"
                                borderRadius="10px"
                                boxShadow="0px 0px 9px #BBBBBB"
                                bg={useColorModeValue('gray.100', 'gray.900')}
                                align={'center'}
                                justify={'center'}
                            >
                                <HStack>
                                    <Icon as={MdSearch} h="30px" w="30px" />

                                    <FormControl id="search" isRequired>
                                        {/* <FormLabel>Search</FormLabel> */}
                                        <Input
                                            placeholder="Search"
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                            type="text"
                                            value={search}
                                            onChange={handleChange_search}
                                            border="0"
                                            _focus={{ outline: 'none' }}
                                        />
                                    </FormControl>
                                </HStack>
                            </Flex>
                            <Flex
                                w="fit-content"
                                h="50px"
                                px="3"
                                py="1"
                                borderRadius="10px"
                                boxShadow="0px 0px 6px 0px #BBBBBB"
                                bg="#1D1D42"
                                align={'center'}
                                justify={'center'}
                            >
                                <HStack align={'center'} justify={'center'}>
                                    <Icon
                                        as={FaSlidersH}
                                        h="30px"
                                        w="30px"
                                        color="#FFFFFF"
                                    />
                                </HStack>
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
                                <Text
                                    fontSize="1.5em"
                                    fontWeight="bold"
                                    as={'span'}
                                    position={'relative'}
                                    _after={{
                                        content: "''",
                                        width: 'full',
                                        height: '30%',
                                        position: 'absolute',
                                        bottom: 1,
                                        left: 0,
                                        bgGradient:
                                            'linear(to-r, #56C3E6, #B0D8BC)',
                                        zIndex: -1,
                                    }}
                                >
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
                            {categories.map((category: any) => (
                                <Flex
                                    w="22%"
                                    py={['3', '3', '3', '4', '5']}
                                    border="0"
                                    borderRadius="10px"
                                    justify="center"
                                    boxShadow="0px 0px 9px #BBBBBB"
                                    bgGradient="linear(to-r, #56C3E6, #B0D8BC)"
                                >
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
                                        // color="#393939"
                                        color="#FFFFFF"
                                    />
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
                                    <Text
                                        fontSize="1.5em"
                                        fontWeight="bold"
                                        as={'span'}
                                        position={'relative'}
                                        _after={{
                                            content: "''",
                                            width: 'full',
                                            height: '30%',
                                            position: 'absolute',
                                            bottom: 1,
                                            left: 0,
                                            bgGradient:
                                                'linear(to-r, #56C3E6, #B0D8BC)',
                                            zIndex: -1,
                                        }}
                                    >
                                        Interest
                                    </Text>
                                    <Icon
                                        as={MdLocationPin}
                                        w="30px"
                                        h="30px"
                                    />
                                </HStack>
                            </Box>
                            <Box>
                                <HStack>
                                    <Icon as={MdBookmarks} />
                                    <Text>See All</Text>
                                </HStack>
                            </Box>
                        </HStack>
                        {/* <HStack w="80%" p="0" m="0" justify="space-around">
                            <Box
                                h="fit-content"
                                w="40%"
                                minW="150px"
                                maxW="400px"
                            >
                                <Flex
                                    h="25vh"
                                    w="100%"
                                    minW="150px"
                                    maxW="400px"
                                    borderRadius="20px"
                                    overflow="hidden"
                                    justify="center"
                                    align="center"
                                >
                                    <Image
                                        src="pic/canada3.jpeg"
                                        w="auto"
                                        h="100%"
                                        maxW="400px"
                                    />
                                </Flex>
                                <VStack
                                    w="full"
                                    justify="center"
                                    align="center"
                                >
                                    <Text fontSize="1.2em" fontWeight="bold">
                                        Interest Name
                                    </Text>
                                    <Text>Location, city, country</Text>
                                </VStack>
                            </Box>
                            <Box
                                h="fit-content"
                                w="40%"
                                minW="150px"
                                maxW="400px"
                            >
                                <Flex
                                    h="25vh"
                                    w="100%"
                                    minW="150px"
                                    maxW="400px"
                                    borderRadius="20px"
                                    overflow="hidden"
                                    justify="center"
                                    align="center"
                                >
                                    <Image
                                        src="pic/toronto-skyline.jpeg"
                                        w="auto"
                                        h="100%"
                                        maxW="400px"
                                    />
                                </Flex>
                                <VStack
                                    w="full"
                                    px="5"
                                    py="2"
                                    align="flex-start"
                                >
                                    <Text fontSize="1.2em" fontWeight="bold">
                                        Interest Name
                                    </Text>
                                    <Text>Location, city, country</Text>
                                </VStack>
                            </Box>
                        </HStack> */}

                        {/* <HStack w="80%" p="0" m="0" justify="space-around"> */}
                        <HStack
                            w="100%"
                            p="0"
                            m="0"
                            justify="center"
                            align="center"
                            overflow={'hidden'}
                        >
                            <Carousel
                                infiniteLoop={true}
                                showStatus={false}
                                showIndicators={false}
                                showArrows={false}
                                centerMode={true}
                                centerSlidePercentage={80}
                            >
                                <Center py={5} mx={5} w="auto">
                                    <Box
                                        role={'group'}
                                        p={6}
                                        maxW={'400px'}
                                        w={'45%'}
                                        bg={useColorModeValue(
                                            'white',
                                            'gray.800'
                                        )}
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
                                                backgroundImage: `url(pic/canada3.jpeg)`,
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
                                                src="pic/canada3.jpeg"
                                            />
                                        </Box>
                                        <Stack
                                            pt={5}
                                            align={'flex-start'}
                                            position="relative"
                                        >
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
                                                Interest Name #1
                                            </Heading>
                                            <Stack
                                                direction={'row'}
                                                align={'center'}
                                            >
                                                <Text color={'gray.600'}>
                                                    Location, City, Country
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Center>
                                <Center py={5} mx={5} w="auto">
                                    <Box
                                        role={'group'}
                                        p={6}
                                        maxW={'400px'}
                                        w={'45%'}
                                        bg={useColorModeValue(
                                            'white',
                                            'gray.800'
                                        )}
                                        boxShadow={'2xl'}
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
                                                backgroundImage: `url(pic/canada3.jpeg)`,
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
                                                src="pic/canada3.jpeg"
                                            />
                                        </Box>
                                        <Stack
                                            pt={5}
                                            align={'flex-start'}
                                            position="relative"
                                        >
                                            <Icon
                                                as={FaHeart}
                                                position="absolute"
                                                top="7"
                                                right="2"
                                            />
                                            <Heading
                                                fontSize={'xl'}
                                                fontFamily={'body'}
                                                fontWeight={'bold'}
                                            >
                                                Interest Name #2
                                            </Heading>
                                            <Stack
                                                direction={'row'}
                                                align={'center'}
                                            >
                                                <Text color={'gray.600'}>
                                                    Location, City, Country
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Center>
                                <Center py={5} mx={5} w="auto">
                                    <Box
                                        role={'group'}
                                        p={6}
                                        maxW={'400px'}
                                        w={'45%'}
                                        bg={useColorModeValue(
                                            'white',
                                            'gray.800'
                                        )}
                                        boxShadow={'2xl'}
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
                                                backgroundImage: `url(pic/canada3.jpeg)`,
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
                                                src="pic/toronto-skyline.jpeg"
                                            />
                                        </Box>
                                        <Stack
                                            pt={5}
                                            align={'flex-start'}
                                            position="relative"
                                        >
                                            <Icon
                                                as={FaHeart}
                                                position="absolute"
                                                top="7"
                                                right="2"
                                            />
                                            <Heading
                                                fontSize={'xl'}
                                                fontFamily={'body'}
                                                fontWeight={'bold'}
                                            >
                                                Interest Name #3
                                            </Heading>
                                            <Stack
                                                direction={'row'}
                                                align={'center'}
                                            >
                                                <Text color={'gray.600'}>
                                                    Location, City, Country
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Center>
                            </Carousel>
                        </HStack>
                    </Flex>
                </VStack>
                <Dock />
            </Flex>
        </Container>
    )
}

export default Home
