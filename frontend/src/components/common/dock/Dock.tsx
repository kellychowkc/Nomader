import { Button, HStack, VStack, Text, Flex } from '@chakra-ui/react'
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
                    bgColor="#0ABAB5"
                >
                    <Button
                        h="60px"
                        w="60px"
                        bgColor="#0ABAB5"
                        _hover={{
                            color: 'white',
                            boxShadow: '0px 0px 5px',
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
                        bgColor="#0ABAB5"
                        _hover={{
                            color: 'white',
                            boxShadow: '0px 0px 5px',
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
                        bgColor="#0ABAB5"
                        _hover={{
                            color: 'white',
                            boxShadow: '0px 0px 5px',
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
                        bgColor="#0ABAB5"
                        _hover={{
                            color: 'white',
                            boxShadow: '0px 0px 5px',
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
                        bgColor="#0ABAB5"
                        _hover={{
                            color: 'white',
                            boxShadow: '0px 0px 5px',
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
