import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './chatroom.css'
// import styles from './chatroom.module.css'

import useChat from '../useChat'
import {
    Box,
    VStack,
    Heading,
    Text,
    Textarea,
    Button,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react'
import Nav from '../../common/navBar/NavBar'
import Dock from '../../common/dock/Dock'
import { getChatRecords } from '../../../api/chat'
import { useSelector } from 'react-redux'
import { AuthState } from '../../../redux/state'

type Props = {}

const ChatRoom = (props: Props) => {
    let { room_id } = useParams()

    console.log('<ChatRoom> room_id = ', room_id)

    const auth: AuthState = useSelector((state: any) => state.auth)

    const [messageHistory, setMessageHistory] = useState([])

    const { messages, sendMessage } = useChat(room_id as string)
    const [newMessage, setNewMessage] = useState('')

    const handleNewMessageChange = (event: any) => {
        setNewMessage(event.target.value)
    }

    const handleSendMessage = () => {
        sendMessage(newMessage)
        setNewMessage('')
    }

    useEffect(() => {
        const chatRecords = getChatRecords(room_id as string).then((result) => {
            console.log(`<getChatRecords> ${result}`)
            if (result.success) {
                console.log(`<getChatRecords> setNeMessage:`)
                console.table(result.data)
                // sendMessage(result.data.map((item: any) => ({ ...item })))

                setMessageHistory(result.data.map((item: any) => ({ ...item })))
            }
        })
        return
    }, [])

    console.log(`[messageHistory] = `, messageHistory)

    console.log(`[messages] = `, messages)

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

            <VStack w="98vw" h={'auto'}>
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
                    Chat Room
                </Text>

                <Box w={'80%'} h={'100%'}>
                    <Heading as={'h3'} size={'md'} className="room-name">
                        Room ID: {room_id}
                    </Heading>
                    <Box
                        h={'60vh'}
                        className="messages-container"
                        overflowY={'scroll'}
                    >
                        <ol className="messages-list">
                            {messageHistory.map((message: any, idx: number) => (
                                <li
                                    key={idx}
                                    className={`message_item ${
                                        message.user_speech_id === auth.id
                                            ? 'my-message'
                                            : 'received-message'
                                    }`}
                                >
                                    <Text
                                        className="message_header"
                                        fontSize={'1.2em'}
                                        fontWeight={'medium'}
                                    >
                                        {message.user_speech_id === auth.id
                                            ? 'me: '
                                            : `${message.user_speech_id}: `}
                                    </Text>
                                    <Text
                                        className="message_content"
                                        fontSize={'1em'}
                                    >
                                        {message.content}
                                    </Text>
                                </li>
                            ))}

                            {messages.map((message: any, idx: number) => (
                                <li
                                    key={idx}
                                    className={`message-item ${
                                        message.ownedByCurrentUser
                                            ? 'my-message'
                                            : 'received-message'
                                    }`}
                                >
                                    <Text
                                        className="message_header"
                                        fontSize={'1.2em'}
                                        fontWeight={'medium'}
                                    >
                                        {message.ownedByCurrentUser
                                            ? 'me:'
                                            : 'other:'}
                                    </Text>
                                    <Text
                                        className="message_content"
                                        fontSize={'1em'}
                                    >
                                        {message.body}
                                    </Text>
                                </li>
                            ))}
                        </ol>
                    </Box>
                    <Box>
                        <HStack
                            px={5}
                            py={4}
                            borderRadius={'10px'}
                            bg={useColorModeValue('gray.100', 'gray.400')}
                            boxShadow={'0px 3px 3px 0px #BBBBBB'}
                            h={'fit-content'}
                            maxH={'100px'}
                        >
                            <Textarea
                                className="new-message-input-field"
                                h={'min-content'}
                                minH={'30px'}
                                maxH={'80px'}
                                bg={useColorModeValue(
                                    'whiteAlpha.800',
                                    'gray.400'
                                )}
                                boxShadow={'0px 0px 1px 0px #BBBBBB'}
                                focusBorderColor={'none'}
                                border={'none'}
                                borderRadius={'full'}
                                placeholder="Write message..."
                                value={newMessage}
                                onChange={handleNewMessageChange}
                                onKeyDown={(e) =>
                                    e.code === 'Enter'
                                        ? handleSendMessage
                                        : // <></>
                                          console.log(e.code)
                                }
                            />
                            <Button
                                className="send-message-button"
                                colorScheme={'teal'}
                                px={5}
                                borderRadius={'full'}
                                onClick={handleSendMessage}
                            >
                                Send
                            </Button>
                            <Button
                                className="add-button"
                                colorScheme={'teal'}
                                border={'none'}
                                borderRadius={'full'}
                                fontSize="3xl"
                                p={'0'}
                                boxShadow={'0px 0px 2px 0px #BBBBBB'}
                                _hover={{ bg: 'red' }}
                            >
                                +
                            </Button>
                        </HStack>
                    </Box>
                </Box>
            </VStack>
            <Dock />
        </Box>
    )
}

export default ChatRoom
