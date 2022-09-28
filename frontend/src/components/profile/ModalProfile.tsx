import {
    ModalContent,
    ModalCloseButton,
    Grid,
    GridItem,
    Input,
    ModalHeader,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter,
    Button,
    Box,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Text,
    useColorModeValue,
    Td,
    HStack,
    Avatar,
    VStack,
} from '@chakra-ui/react'
import { UserProfile } from '../../api/user'
import { Post } from '../layoutForum/Forum'

type Props = {
    userPosts: Post[]
    userFriends: IUser[]
    disclosure: any
}

export interface IUser {
    first_name: string
    last_name: string
    username: string
    profile: string
}

const demoUser: UserProfile = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_num: '',
    created_at: '',
    updated_at: '',

    birthday: '',
    profile: '',
}

export function ModalPosts(props: Props) {
    return (
        <ModalContent>
            <ModalHeader>All Posts By User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Table
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
                            <Th pl={3} fontSize={'md'} fontWeight={'bold'}>
                                Created at
                            </Th>
                            <Th fontSize={'md'} fontWeight={'bold'}>
                                Title
                            </Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {props.userPosts.map((post: Post, idx: number) => (
                            <Tr key={idx}>
                                <Td py="5px">
                                    <HStack>
                                        <VStack align="left">
                                            <Text className="created_at">
                                                {post?.created_at?.split(
                                                    'T',
                                                    1
                                                )}
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </Td>
                                <Td py="5px">
                                    <HStack>
                                        <VStack align="left">
                                            <Text className="title">
                                                {post?.title}
                                            </Text>
                                        </VStack>
                                    </HStack>
                                    {/* <Button
                                        m="1"
                                        size="md"
                                        onClick={() => {
                                            props.setViewUser(user.username)
                                            props.disclosure.onClose()
                                        }}
                                    >
                                        View
                                    </Button> */}
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </ModalBody>

            <ModalFooter>
                <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={props.disclosure.onClose}
                >
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    )
}

export function ModalFriends(props: Props) {
    return (
        <ModalContent>
            <ModalHeader>User's Friends</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Table
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
                                User
                            </Th>
                            <Th fontSize={'md'} fontWeight={'bold'}>
                                Detail
                            </Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {props.userFriends.map((user: IUser, idx: number) => (
                            <Tr key={idx}>
                                <Td py="5px">
                                    <HStack>
                                        <Box className="friendAvatar">
                                            <Avatar
                                                size="sm"
                                                name={
                                                    user.first_name +
                                                    ' ' +
                                                    user.last_name
                                                }
                                                src={user.profile}
                                            />
                                        </Box>
                                        <VStack align="left">
                                            <Text
                                                className="nickname"
                                                fontWeight="bold"
                                            >
                                                {user.first_name +
                                                    ' ' +
                                                    user.last_name}
                                            </Text>
                                            <Text className="username">
                                                {user.username}
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </Td>
                                <Td py="5px">
                                    <Button
                                        m="1"
                                        size="md"
                                        // onClick={() =>
                                        //     props.viewUser(user.username)
                                        // }
                                    >
                                        View
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </ModalBody>

            <ModalFooter>
                <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={props.disclosure.onClose}
                >
                    Close
                </Button>
                <Button colorScheme="yellow">Update</Button>
            </ModalFooter>
        </ModalContent>
    )
}
