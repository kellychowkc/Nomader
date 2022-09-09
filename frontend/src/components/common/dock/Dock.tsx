import {
    Button,
    HStack,
    VStack,
    Text,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { MdChat, MdForum, MdHome, MdPeople, MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Dock() {
    return (
        <>
            <Flex
                w="full"
                h="100px"
                zIndex={9999}
                direction="column"
                justify="center"
                align="center"
            >
                <HStack
                    w="100%"
                    h="80px"
                    px={4}
                    align="center"
                    justifyContent="space-around"
                    position="fixed"
                    bottom="0"
                    bg={useColorModeValue('gray.100', 'gray.900')}
                >
                    <Button
                        h="60px"
                        w="60px"
                        bg={useColorModeValue('gray.100', 'gray.900')}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                    >
                        <Link to="/">
                            <VStack>
                                <MdHome size="24px" />
                                <Text>Home</Text>
                            </VStack>
                        </Link>
                    </Button>
                    <Button
                        h="60px"
                        w="60px"
                        bg={useColorModeValue('gray.100', 'gray.900')}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                    >
                        <Link to="/forum">
                            <VStack>
                                <MdForum size="24px" />
                                <Text>Forum</Text>
                            </VStack>
                        </Link>
                    </Button>
                    <Button
                        h="60px"
                        w="60px"
                        bg={useColorModeValue('gray.100', 'gray.900')}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                    >
                        <Link to="/friends">
                            <VStack>
                                <MdPeople size="24px" />
                                <Text>Friends</Text>
                            </VStack>
                        </Link>
                    </Button>
                    <Button
                        h="60px"
                        w="60px"
                        bg={useColorModeValue('gray.100', 'gray.900')}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                    >
                        <Link to="/chat">
                            <VStack>
                                <MdChat size="24px" />
                                <Text>Chat</Text>
                            </VStack>
                        </Link>
                    </Button>

                    <Button
                        h="60px"
                        w="60px"
                        bg={useColorModeValue('gray.100', 'gray.900')}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                    >
                        <Link to="/profile">
                            <VStack>
                                <MdPerson size="24px" />
                                <Text>Profile</Text>
                            </VStack>
                        </Link>
                    </Button>
                </HStack>
            </Flex>
        </>
    )
}

export default Dock
