import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    HStack,
    IconButton,
    Text,
} from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { useSelector } from 'react-redux'
import { AuthState } from '../../../redux/state'
import { NavLink } from 'react-router-dom'

interface LinkItemProps {
    name: string
    path: string
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Destinations', path: '/destination' },
    { name: 'Safety', path: '/contact' },
]

const controlPanelLink: LinkItemProps = {
    name: 'Control Panel',
    path: '/control/',
}

const NavLinkHover = ({ children }: { children: LinkItemProps }) => (
    <NavLink to={children.path} key={children.name}>
        <Box
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
        >
            {children.name}
        </Box>
    </NavLink>
)

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    //update username from redux
    const auth: AuthState = useSelector((state: any) => state.auth)

    console.log(auth)

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Link href="/" style={{ textDecoration: 'none' }}>
                                <Text
                                    fontSize="xl"
                                    fontFamily="monospace"
                                    fontWeight="bold"
                                >
                                    Nomader
                                </Text>
                            </Link>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {LinkItems.map((link: any) => (
                                <NavLink to={link.path} key={link.name}>
                                    {link.name}
                                </NavLink>
                            ))}
                            {auth.isAdmin ? (
                                <NavLink
                                    className="controlPanel"
                                    to={'/control/'}
                                >
                                    Control Panel
                                </NavLink>
                            ) : (
                                <></>
                            )}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={3}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                >
                                    <Avatar size={'sm'} src={auth.username} />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>{auth.username}</MenuItem>
                                    <MenuItem>Edit Profile</MenuItem>
                                    <MenuDivider />
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {LinkItems.map((link) => (
                                <NavLinkHover key={link.name}>
                                    {link}
                                </NavLinkHover>
                            ))}
                            {auth.isAdmin ? (
                                <NavLinkHover>{controlPanelLink}</NavLinkHover>
                            ) : (
                                <></>
                            )}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}
