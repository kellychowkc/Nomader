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
import {
    MdOutlineChat,
    MdOutlineForum,
    MdOutlineHome,
    MdOutlinePeople,
    MdOutlinePerson,
} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import './Dock.css'

interface Action {
    name: string
    path: string
    icon: IconType
}

function Dock() {
    const actions: Action[] = [
        { name: 'Home', path: '/', icon: MdOutlineHome },
        { name: 'Forum', path: '/forum', icon: MdOutlineForum },
        { name: 'Friends', path: '/friends', icon: MdOutlinePeople },
        { name: 'Chat', path: '/Chat', icon: MdOutlineChat },
        { name: 'Profile', path: '/profile', icon: MdOutlinePerson },
    ]

    return (
        <>
            <Flex
                w="full"
                h="80px"
                zIndex={9999}
                direction="column"
                justify="center"
                align="center"
            >
                <HStack
                    w="100%"
                    h="70px"
                    px={4}
                    align="center"
                    justifyContent="space-around"
                    position="fixed"
                    bottom="0"
                    bg={useColorModeValue('gray.100', 'gray.900')}
                    borderTopRadius="20px"
                    boxShadow="0px 0px 15px #B0D8BC60"
                >
                    {actions.map((action: Action, idx: number) => (
                        <Flex
                            key={idx}
                            h="60px"
                            w="60px"
                            _hover={{
                                textDecoration: 'none',
                                color: '#FFFFFF',
                            }}
                            justify="center"
                            align="flex-start"
                        >
                            <NavLink
                                to={action.path}
                                className={({ isActive }) =>
                                    isActive ? 'active' : undefined
                                }
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              color: '#393939',
                                          }
                                        : { color: '#CCCCCC' }
                                }
                            >
                                <VStack justify="center" align="center">
                                    <Icon as={action.icon} h="35px" w="35px" />
                                    <Box className="bar"></Box>
                                </VStack>
                            </NavLink>
                        </Flex>
                    ))}
                </HStack>
            </Flex>
        </>
    )
}

export default Dock
