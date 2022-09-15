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
    Divider,
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
} from 'react-icons/md'

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
    'digitial nomad',
    'meme',
    'tecky',
    'co-working',
    'Hong Kong',
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
                                            bg: '#0ABAB5',
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
                        <HStack
                            w="80%"
                            px="3"
                            py="1"
                            m="0"
                            justify="space-between"
                            borderRadius="10px"
                            boxShadow="0px 0px 9px #BBBBBB"
                        >
                            <Box w="80%">
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
                                    />
                                </FormControl>
                            </Box>
                            <Box w="fit-content">
                                <Icon as={MdSearch} h="40px" w="40px" />
                            </Box>
                            <Box w="fit-content">
                                <FormControl id="filter">
                                    {/* <FormLabel>Search</FormLabel> */}

                                    <Icon as={MdFilterList} h="40px" w="40px" />
                                </FormControl>
                            </Box>
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
                        <HStack w="80%" p="1" mb="3" justify="space-between">
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
                                        bg: '#0ABAB5',
                                        zIndex: -1,
                                    }}
                                >
                                    Category
                                </Text>
                                <Icon as={MdLocalActivity} />
                            </HStack>

                            <HStack>
                                <Icon as={MdBookmarks} />
                                <Text>See All</Text>
                            </HStack>
                        </HStack>
                        <HStack w="80%" p="0" m="0" justify="space-around">
                            <Flex
                                w="22%"
                                py={['3', '3', '3', '4', '5']}
                                border="0"
                                borderRadius="10px"
                                justify="center"
                                boxShadow="0px 0px 9px #BBBBBB"
                            >
                                <Icon
                                    as={MdMap}
                                    h="60px"
                                    w="60px"
                                    color="#393939"
                                />
                            </Flex>
                            <Divider orientation="vertical" />
                            <Flex
                                w="22%"
                                py={['3', '3', '3', '4', '5']}
                                border="0"
                                borderRadius="10px"
                                justify="center"
                                boxShadow="0px 0px 9px #BBBBBB"
                            >
                                <Icon
                                    as={MdMoney}
                                    h="60px"
                                    w="60px"
                                    color="#393939"
                                />
                            </Flex>
                            <Divider orientation="vertical" />
                            <Flex
                                w="22%"
                                py={['3', '3', '3', '4', '5']}
                                border="0"
                                borderRadius="10px"
                                justify="center"
                                boxShadow="0px 0px 9px #BBBBBB"
                            >
                                <Icon
                                    as={MdFlight}
                                    h="60px"
                                    w="60px"
                                    color="#393939"
                                />
                            </Flex>
                            <Divider orientation="vertical" />
                            <Flex
                                w="22%"
                                py={['3', '3', '3', '4', '5']}
                                border="0"
                                borderRadius="10px"
                                justify="center"
                                boxShadow="0px 0px 9px #BBBBBB"
                            >
                                <Icon
                                    as={MdSecurity}
                                    h="60px"
                                    w="60px"
                                    color="#393939"
                                />
                            </Flex>
                        </HStack>
                    </Flex>
                    <Flex
                        className="Interest"
                        w="80vw"
                        direction="column"
                        justify="center"
                        align="center"
                    >
                        <HStack w="80%" p="1" mb="3" justify="space-between">
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
                                            bg: '#0ABAB5',
                                            zIndex: -1,
                                        }}
                                    >
                                        Interest
                                    </Text>
                                    <Icon as={MdLocationPin} />
                                </HStack>
                            </Box>
                            <Box>
                                <HStack>
                                    <Text>See All</Text>
                                    <Icon as={MdBookmarks} />
                                </HStack>
                            </Box>
                        </HStack>
                        <HStack justify="center" align="center">
                            <Box
                                h="30vh"
                                w="40%"
                                minW="200px"
                                borderRadius="20px"
                                overflow="hidden"
                            >
                                <Image src="pic/canada3.jpeg" />
                            </Box>
                            <Box
                                h="30vh"
                                w="40%"
                                minW="150px"
                                borderRadius="20px"
                                overflow="hidden"
                            >
                                <Image src="pic/toronto-skyline.jpeg" />
                            </Box>
                        </HStack>
                    </Flex>
                </VStack>
                <Dock />
            </Flex>
        </Container>
    )
}

export default Home
