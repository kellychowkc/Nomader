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
    Text,
    Icon,
    LinkOverlay,
    LinkBox,
} from '@chakra-ui/react'

import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'

import { useSelector } from 'react-redux'
import { AuthState } from '../../../redux/state'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    const navigate = useNavigate()

    //update username from redux
    const auth: AuthState = useSelector((state: any) => state.auth)

    function logOut() {
        localStorage.removeItem('auth_token')
        navigate('/welcome')
    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <HStack
                        w={'full'}
                        spacing={8}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Text
                                fontSize="xl"
                                fontFamily="monospace"
                                fontWeight="bold"
                            >
                                Nomader
                            </Text>
                        </Link>
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
                                    <Icon as={HamburgerIcon} boxSize="1.5em" />
                                </MenuButton>
                                <MenuList>
                                    <Box py={1} px={2}>
                                        <HStack justifyContent={'space-around'}>
                                            <Avatar
                                                size={'md'}
                                                name={auth.username}
                                                src={auth.profile}
                                            />
                                            <Text
                                                fontSize={'lg'}
                                                fontWeight={'semibold'}
                                                textAlign={'center'}
                                            >
                                                {auth.username}
                                            </Text>
                                        </HStack>
                                    </Box>
                                    <LinkBox>
                                        <MenuItem>
                                            <LinkOverlay
                                                href="/editProfile"
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Edit Profile
                                            </LinkOverlay>
                                        </MenuItem>
                                    </LinkBox>

                                    {auth.isAdmin ? (
                                        <LinkBox>
                                            <MenuItem>
                                                <NavLink
                                                    className="controlPanel"
                                                    to={'/control/'}
                                                >
                                                    Control Panel
                                                </NavLink>
                                            </MenuItem>
                                        </LinkBox>
                                    ) : (
                                        <></>
                                    )}

                                    <MenuDivider />
                                    <LinkBox>
                                        <MenuItem>
                                            <LinkOverlay
                                                onClick={logOut}
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Logout
                                            </LinkOverlay>
                                        </MenuItem>
                                    </LinkBox>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
