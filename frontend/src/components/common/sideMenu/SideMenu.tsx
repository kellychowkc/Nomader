import {
    Box,
    HStack,
    VStack,
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
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import styles from './SideMenu.module.css'

interface Action {
    name: string
    path: string
    icon: IconType
}

function SideMenu() {
    const actions: Action[] = [
        { name: 'Home', path: '/home', icon: MdOutlineHome },
        { name: 'Forum', path: '/forum', icon: MdOutlineForum },
        { name: 'Matching', path: '/matchingIndex', icon: MdOutlinePeople },
        { name: 'Chat', path: '/chat', icon: MdOutlineChat },
        { name: 'Profile', path: '/profile', icon: MdOutlinePerson },
    ]
    const bg = useColorModeValue('gray.100', 'gray.900')

    return (
        <Sidebar className={styles.box}>
            <Menu>
                {actions.map((action: Action, idx: number) => (
                    <MenuItem className={styles.meunItem}>
                        <Flex key={idx}>
                            <text>{action.name}</text>
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
                    </MenuItem>
                ))}
            </Menu>
        </Sidebar>
    )
}

export default SideMenu
