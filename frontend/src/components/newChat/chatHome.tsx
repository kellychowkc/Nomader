import React, { useEffect, useState } from 'react'
import {
    Box,
    Text,
    VStack,
    Table,
    Tbody,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { AuthState } from '../../redux/state'
import { useSelector } from 'react-redux'
import { getLastMessages, getRoomInfo, getUserChatRooms } from '../../api/chat'
import ChatList from './chatList'

interface IChatUser {
    room_id: string
    username: string
    profile: string
    lastMessage: string
    lastMessageTime: string
}

const mockUpChatsList = [
    {
        room_id: '1',
        username: 'Adams',
        profile: 'green',
        lastMessage: 'adams is handsome',
        lastMessageTime: '00:00',
    },
    {
        room_id: '2',
        username: 'Jason',
        profile: 'blue',
        lastMessage: 'jason is handsome',
        lastMessageTime: '12:30',
    },
    {
        room_id: '3',
        username: 'Bruce',
        profile: 'yellow',
        lastMessage: 'bruce is handsome',
        lastMessageTime: '04:20',
    },
    {
        room_id: '4',
        username: 'Lin',
        profile: 'purple',
        lastMessage: 'lin is good looking',
        lastMessageTime: '19:33',
    },
    {
        room_id: '5',
        username: 'Adams',
        profile: 'green',
        lastMessage: 'adams is handsome',
        lastMessageTime: '00:00',
    },
    {
        room_id: '6',
        username: 'Jason',
        profile: 'blue',
        lastMessage: 'jason is handsome',
        lastMessageTime: '12:30',
    },
    {
        room_id: '7',
        username: 'Bruce',
        profile: 'yellow',
        lastMessage: 'bruce is handsome',
        lastMessageTime: '04:20',
    },
    {
        room_id: '8',
        username: 'Lin',
        profile: 'purple',
        lastMessage: 'lin is good looking',
        lastMessageTime: '19:33',
    },
    {
        room_id: '9',
        username: 'Adams',
        profile: 'green',
        lastMessage: 'adams is handsome',
        lastMessageTime: '00:00',
    },
    {
        room_id: '10',
        username: 'Jason',
        profile: 'blue',
        lastMessage: 'jason is handsome',
        lastMessageTime: '12:30',
    },
    {
        room_id: '11',
        username: 'Bruce',
        profile: 'yellow',
        lastMessage: 'bruce is handsome',
        lastMessageTime: '04:20',
    },
    {
        room_id: '12',
        username: 'Lin',
        profile: 'purple',
        lastMessage: 'lin is good looking',
        lastMessageTime: '19:33',
    },
]

export default function ChatHome() {
    // ----------------------------------------------------------------------------

    const auth: AuthState = useSelector((state: any) => state.auth)

    const [roomInfo, setRoomInfo] = React.useState<IChatUser>()

    const [roomList, setRoomList] = useState<Array<any>>([])

    // const handleRoomInfoChange = (event: any) => {
    //     setRoomInfo(event.target.value)
    // }

    useEffect(() => {
        const allChatRoomsInfo = getUserChatRooms(auth.id as number).then(
            (result) => {
                if (result.success) {
                    console.log('<allChatRoomsInfo> Fetch Success')
                    console.log(
                        '<allChatRoomsInfo> User Chat Rooms and Info = ',
                        result.data
                    )

                    setRoomList(
                        result.data.map((item: any) => ({
                            ...item,
                            newItem: 'Hello, I want to add last messages here',
                        }))
                    )

                    return result.data
                } else {
                    console.log('<allChatRoomsInfo> Fetch Fail')
                }
            }
        )
    }, [])

    console.log('<[State] roomList --Outside--> = ', roomList)
    console.log('<[State] roomInfo --Outside--> = ', roomInfo)

    // ----------------------------------------------------------------------------

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

            <VStack w="98vw" justifyContent="center" alignItems="center">
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
                    Chats
                </Text>

                {/* === Join a specific chat room === */}
                {/* <Box p={3} border="1px solid #000000">
                    <HStack>
                        <input
                            type="text"
                            placeholder="Person"
                            value={roomName}
                            onChange={handleRoomNameChange}
                            className="text-input-field"
                        />
                        <Button
                            as={Link}
                            to={`/chat/${roomName}`}
                            className="enter-room-button"
                        >
                            Join room
                        </Button>
                    </HStack>
                </Box> */}
                <Box
                    w="85vw"
                    h="100%"
                    maxH="full"
                    scrollBehavior="smooth"
                    overflowY="auto"
                    overflowX="hidden"
                >
                    <Table
                        className="messageTable"
                        variant="striped"
                        colorScheme="teal"
                        bg={useColorModeValue('white', 'gray.600')}
                        w="100%"
                    >
                        <Thead
                            position="sticky"
                            top={0}
                            bg={useColorModeValue('white', 'gray.600')}
                            zIndex={10}
                        >
                            <Tr>
                                <Th pl={8} fontSize={'md'} fontWeight={'bold'}>
                                    Message
                                </Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {/* ========================================================================== */}
                            <ChatList chatRoomList={roomList} />
                            {/* ========================================================================== */}
                        </Tbody>
                    </Table>
                </Box>
            </VStack>
            <Dock />
        </Box>
    )
}
