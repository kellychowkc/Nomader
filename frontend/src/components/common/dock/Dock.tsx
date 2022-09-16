import {
    Box,
    HStack,
    VStack,
    Text,
    Flex,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
import { MdChat, MdForum, MdHome, MdPeople, MdPerson } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

interface Action {
    name: string
    path: string
    icon: IconType
}

function Dock() {
    const actions: Action[] = [
        { name: 'Home', path: '/', icon: MdHome },
        { name: 'Forum', path: '/forum', icon: MdForum },
        { name: 'Friends', path: '/friends', icon: MdPeople },
        { name: 'Chat', path: '/Chat', icon: MdChat },
        { name: 'Profile', path: '/profile', icon: MdPerson },
    ]

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
                    borderTopRadius="20px"
                    boxShadow="0px 0px 20px #0ABAB5"
                >
                    {actions.map((action: Action, idx: number) => (
                        <Box
                            key={idx}
                            h="60px"
                            w="60px"
                            _hover={{
                                textDecoration: 'none',
                                color: '#FFFFFF',
                            }}
                        >
                            <NavLink
                                to={action.path}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              border: '5px',
                                              color: '#0ABAB5',
                                          }
                                        : {}
                                }
                            >
                                <VStack>
                                    <Icon as={action.icon} h="30px" w="30px" />
                                    <Text>{action.name}</Text>
                                </VStack>
                            </NavLink>
                        </Box>
                    ))}
                </HStack>
            </Flex>
        </>
    )
}

export default Dock
