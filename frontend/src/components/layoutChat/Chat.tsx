import React from 'react'
import {
    Box,
    Heading,
    Text,
    Container,
    VStack,
    Flex,
    Table,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
    HStack,
    Circle,
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'

interface IChat {
    name: string
    avatar: string
    lastMessage: string
    lastMessageTime: string
}

const chatsList = [
    {
        name: 'Adams',
        avatar: 'green',
        lastMessage: 'adams is handsome',
        lastMessageTime: '00:00',
    },
    {
        name: 'Jason',
        avatar: 'blue',
        lastMessage: 'jason is handsome',
        lastMessageTime: '12:30',
    },
    {
        name: 'Bruce',
        avatar: 'yellow',
        lastMessage: 'bruce is handsome',
        lastMessageTime: '04:20',
    },
    {
        name: 'Lin',
        avatar: 'purple',
        lastMessage: 'lin is good looking',
        lastMessageTime: '19:33',
    },
]

const Chat = () => {
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
                <Heading as="h1">Chat</Heading>
                <p></p>

                <VStack w="98vw">
                    <Text
                        fontSize="2em"
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
                        Chat List
                    </Text>
                    <Box
                        w="80vw"
                        maxH="30vh"
                        scrollBehavior="smooth"
                        overflowY="auto"
                    >
                        <Table
                            variant="striped"
                            colorScheme="teal"
                            w="100%"
                            // border="2px"
                            // borderColor="gray.100"
                        >
                            <Thead
                                position="sticky"
                                top={0}
                                bg="#FFFFFF"
                                zIndex={10}
                            >
                                <Tr>
                                    <Th>Info (Avater, name)</Th>
                                    <Th>Time (Last message)</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td w="50%">
                                        <HStack>
                                            <Box className="friendAvatar">
                                                <Circle size="30px" bg="pink" />
                                            </Box>
                                            <VStack align="left">
                                                <Text
                                                    className="nickname"
                                                    fontWeight="bold"
                                                >
                                                    Eric Chu
                                                </Text>
                                                <Text className="lastMessage">
                                                    Ha ha ha ha ha, CLS
                                                </Text>
                                            </VStack>
                                        </HStack>
                                    </Td>
                                    <Td w="50%">
                                        <Text>17:51</Text>
                                    </Td>
                                </Tr>
                                {chatsList.map((friend: IChat, idx: number) => (
                                    <Tr key={idx}>
                                        <Td>
                                            <HStack>
                                                <Box className="friendAvatar">
                                                    <Circle
                                                        size="30px"
                                                        bg={friend.avatar}
                                                    />
                                                </Box>
                                                <VStack align="left">
                                                    <Text
                                                        className="nickname"
                                                        fontWeight="bold"
                                                    >
                                                        {friend.name}
                                                    </Text>
                                                    <Text className="lastMessage">
                                                        {friend.lastMessage}
                                                    </Text>
                                                </VStack>
                                            </HStack>
                                        </Td>
                                        <Td>
                                            <Text>
                                                {friend.lastMessageTime}
                                            </Text>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th></Th>
                                    <Th></Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </Box>
                </VStack>
                <Dock />
            </Flex>
        </Container>
    )
}

export default Chat
