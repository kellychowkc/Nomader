import { useSelector } from 'react-redux'

import {
    Box,
    Button,
    chakra,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    HStack,
    Icon,
    Image,
    Input,
    SimpleGrid,
    Stack,
    Stat,
    StatLabel,
    StatNumber,
    Switch,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { ReactNode } from 'react'

import {
    MdNaturePeople,
    MdSearch,
    MdTimelapse,
    MdWarning,
} from 'react-icons/md'
import { UsersList } from './userList'
import { RootState } from '../../../redux/store'

export interface IUser {
    fullname: string
    username: string
    avatar: string
}

const usersList: IUser[] = [
    { fullname: 'Adams', username: 'adamsishandsome', avatar: 'green' },
    { fullname: 'Jason', username: 'jasonishandsome', avatar: 'blue' },
    { fullname: 'Bruce', username: 'bruceishandsome', avatar: 'yellow' },
    { fullname: 'Lin', username: 'linisgoodlooking', avatar: 'purple' },
    { fullname: 'Adams', username: 'adamsishandsome', avatar: 'green' },
    { fullname: 'Jason', username: 'jasonishandsome', avatar: 'blue' },
    { fullname: 'Bruce', username: 'bruceishandsome', avatar: 'yellow' },
    { fullname: 'Lin', username: 'linisgoodlooking', avatar: 'purple' },
    { fullname: 'Adams', username: 'adamsishandsome', avatar: 'green' },
    { fullname: 'Jason', username: 'jasonishandsome', avatar: 'blue' },
    { fullname: 'Bruce', username: 'bruceishandsome', avatar: 'yellow' },
    { fullname: 'Lin', username: 'linisgoodlooking', avatar: 'purple' },
]

interface IProfile {
    username: string
    password: string
    first_name: string
    last_name: string

    email: string
    phone_num: string

    birthday?: string
    gender?: string

    information?: string
    profile?: string
    job_id?: number
    emergency_contact_person?: string
    emergency_contact_num?: number
    original_city_id?: number
    country_id?: number
    created_at: string
    updated_at: string
}

const demoUser: IProfile = {
    username: 'adamsishandsome',
    password: 'xxxHideMexxx',
    first_name: 'Adams',
    last_name: 'Ip',
    email: 'adamsip@tecky.io',
    phone_num: '173173173',
    created_at: '2022-09-13',
    updated_at: '2022-09-13',

    birthday: '1997-7-1',
    profile: 'purple',
}

interface IStats {
    name: number | string
    stats: number | string
}

const demoStats: any = {
    activeTime: {
        name: 'Active Time',
        stats: '15 mins',
    },
    matchCount: {
        name: 'Match Count',
        stats: '25',
    },
    matchRate: {
        name: 'Match Rate',
        stats: '100%',
    },
}

interface StatsCardProps {
    title: string
    stat: string
    icon: ReactNode
}
function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}
        >
            <Flex justifyContent={'space-between'} minW={'100px'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'}>{title}</StatLabel>
                    <StatNumber fontSize={'lg'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}
                >
                    {icon}
                </Box>
            </Flex>
        </Stat>
    )
}
interface Permission {
    name: string
    value: string
}

const permissions: Permission[] = [
    { name: 'Visible by others', value: '' },
    { name: 'Matching', value: '' },
    { name: 'Create post', value: '' },
    { name: 'Comment', value: '' },
    { name: 'Upload Picture', value: '' },
]

export default function ManageUser() {
    useEffect(() => {}, [])
    const reduxUserList = useSelector((state: RootState) => state.manageUser)
    const [searchUser, setSearchUser] = React.useState('')
    const handleChange_searchUser = (event: any) =>
        setSearchUser(event.target.value)

    return (
        <Box maxW="7xl" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={1}
                fontWeight={'bold'}
            >
                User Management
            </chakra.h1>

            <Container py={5} maxW={'container.4xl'}>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        lg: 'repeat(2, 1fr)',
                    }}
                    gap={6}
                >
                    <GridItem w="100%" h="50%" maxH="50%">
                        <Stack
                            spacing={4}
                            w={'full'}
                            minW={'md'}
                            maxW={'xl'}
                            h="auto"
                            bg={useColorModeValue('white', 'gray.700')}
                            rounded={'xl'}
                            boxShadow={'lg'}
                            p={6}
                        >
                            <SimpleGrid
                                columns={{ base: 1, lg: 2 }}
                                spacing={{ base: 5, lg: 8 }}
                            >
                                <StatsCard
                                    title={demoStats.activeTime.name}
                                    stat={demoStats.activeTime.stats}
                                    icon={<MdTimelapse size={'2em'} />}
                                />
                                <StatsCard
                                    title={'User Match Count/%'}
                                    stat={
                                        demoStats.matchCount.stats +
                                        ' / ' +
                                        demoStats.matchRate.stats
                                    }
                                    icon={<MdNaturePeople size={'2em'} />}
                                />
                            </SimpleGrid>
                            <Heading
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl' }}
                            >
                                User Profile
                            </Heading>

                            <SimpleGrid
                                columns={{ base: 1, lg: 2 }}
                                spacing={{ base: 5, lg: 8 }}
                            >
                                <Flex
                                    className="leftBoardLeft"
                                    w="100%"
                                    wrap="wrap"
                                    direction={{
                                        base: 'row',
                                        sm: 'column',
                                        md: 'column',
                                        lg: 'row',
                                        xl: 'row',
                                    }}
                                    justify="center"
                                    alignContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Box m={1} h="min-content">
                                        <FormControl id="userName">
                                            <FormLabel>User name</FormLabel>
                                            <Input
                                                placeholder="UserName"
                                                _placeholder={{
                                                    color: 'gray.500',
                                                }}
                                                type="text"
                                                value={demoUser.username}
                                                readOnly
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box m={1} h="min-content">
                                        <FormControl id="full_name">
                                            <FormLabel>Full Name</FormLabel>
                                            <Input
                                                placeholder="Full name"
                                                _placeholder={{
                                                    color: 'gray.500',
                                                }}
                                                type="text"
                                                value={
                                                    demoUser.first_name +
                                                    ' ' +
                                                    demoUser.last_name
                                                }
                                                readOnly
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box m={1}>
                                        <FormControl id="birthday">
                                            <FormLabel>Age</FormLabel>
                                            <Input
                                                placeholder="Birthday"
                                                _placeholder={{
                                                    color: 'gray.500',
                                                }}
                                                type="text"
                                                value={demoUser.birthday}
                                                readOnly
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box m={1}>
                                        <FormControl id="gender">
                                            <FormLabel>Gender</FormLabel>
                                            <Input
                                                placeholder="M/F/T..."
                                                _placeholder={{
                                                    color: 'gray.500',
                                                }}
                                                type="text"
                                                value={demoUser.gender}
                                                readOnly
                                            />
                                        </FormControl>
                                    </Box>
                                    <Stack
                                        className="buttonGroup"
                                        direction={'column'}
                                        justifyContent="space-around"
                                        alignItems="center"
                                        alignContent={'space-around'}
                                        h="max-content"
                                    >
                                        <Stack
                                            my="3px"
                                            p="3px"
                                            spacing={4}
                                            direction={['column', 'row']}
                                        >
                                            <Button
                                                bg={'teal.400'}
                                                color={'white'}
                                                size="md"
                                                _hover={{
                                                    bg: 'teal.500',
                                                }}
                                            >
                                                Detail
                                            </Button>
                                            <Button
                                                bg={'blue.400'}
                                                color={'white'}
                                                size="md"
                                                _hover={{
                                                    bg: 'blue.500',
                                                }}
                                            >
                                                Friends
                                            </Button>
                                        </Stack>
                                        <Stack
                                            my="3px"
                                            p="3px"
                                            spacing={4}
                                            direction={['column', 'row']}
                                        >
                                            <Button
                                                bg={'orange.400'}
                                                color={'white'}
                                                size="md"
                                                _hover={{
                                                    bg: 'orange.500',
                                                }}
                                            >
                                                Suspend
                                            </Button>
                                            <Button
                                                bg={'red.400'}
                                                color={'white'}
                                                size="md"
                                                _hover={{
                                                    bg: 'red.500',
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Flex>
                                <Flex className="leftBoardRight">
                                    <VStack>
                                        <Box
                                            className="profileHistory"
                                            fontSize="sm"
                                            color="#363636"
                                        >
                                            <Text>
                                                Member since:
                                                {demoUser.created_at}
                                            </Text>
                                            <Text>
                                                Last update:
                                                {demoUser.updated_at}
                                            </Text>
                                        </Box>
                                        <HStack
                                            className="profilePictures"
                                            spacing={0}
                                        >
                                            <Box bg="teal" w="66%">
                                                <Image src="https://avatars.dicebear.com/api/male/username.svg" />
                                            </Box>
                                            <Box w="33%">
                                                <VStack w="100%" spacing={0}>
                                                    <Box bg="red">
                                                        <Image src="https://avatars.dicebear.com/api/male/username.svg" />
                                                    </Box>
                                                    <Box bg="green">
                                                        <Image src="https://avatars.dicebear.com/api/male/username.svg" />
                                                    </Box>
                                                </VStack>
                                            </Box>
                                        </HStack>
                                        <VStack
                                            className="profileComplains"
                                            w="100%"
                                            spacing={0}
                                            p="3px"
                                            shadow={'xl'}
                                            border={'1px solid'}
                                            borderColor={useColorModeValue(
                                                'gray.800',
                                                'gray.500'
                                            )}
                                            rounded={'lg'}
                                        >
                                            <Text
                                                fontSize={'lg'}
                                                fontWeight={'bold'}
                                            >
                                                Complain <Icon as={MdWarning} />
                                            </Text>
                                            <HStack
                                                w="100%"
                                                spacing={0}
                                                justifyContent="space-evenly"
                                            >
                                                <Box>Submitted: {'#'}</Box>
                                                <Box>Received: {'#'}</Box>
                                            </HStack>
                                        </VStack>
                                        <VStack
                                            className="profilePermissionSetting"
                                            w="100%"
                                            spacing={0}
                                            p="3px"
                                            shadow={'xl'}
                                            border={'1px solid'}
                                            borderColor={useColorModeValue(
                                                'gray.800',
                                                'gray.500'
                                            )}
                                            rounded={'lg'}
                                        >
                                            <Text
                                                fontSize={'lg'}
                                                fontWeight={'bold'}
                                            >
                                                Permission Setting
                                            </Text>

                                            {permissions.map(
                                                (
                                                    permission: Permission,
                                                    idx: number
                                                ) => (
                                                    <HStack
                                                        key={idx}
                                                        w="90%"
                                                        px="5px"
                                                        py="3px"
                                                    >
                                                        <FormControl
                                                            display="flex"
                                                            justifyContent={
                                                                'space-between'
                                                            }
                                                        >
                                                            <FormLabel
                                                                htmlFor="visibleByOthers"
                                                                mb="0"
                                                            >
                                                                {
                                                                    permission.name
                                                                }
                                                            </FormLabel>
                                                            <Switch
                                                                id={
                                                                    permission.value
                                                                }
                                                                colorScheme="teal"
                                                                size="md"
                                                            />
                                                        </FormControl>
                                                    </HStack>
                                                )
                                            )}
                                        </VStack>
                                    </VStack>
                                </Flex>
                            </SimpleGrid>
                        </Stack>
                    </GridItem>
                    <GridItem w="100%" h="50%" maxH="50%">
                        <Stack
                            spacing={4}
                            w={'full'}
                            minW={'md'}
                            maxW={'xl'}
                            bg={useColorModeValue('white', 'gray.700')}
                            rounded={'xl'}
                            boxShadow={'lg'}
                            p={6}
                        >
                            <Flex
                                w="100%"
                                wrap="wrap"
                                direction={{
                                    base: 'row',
                                    sm: 'column',
                                    md: 'column',
                                    lg: 'row',
                                    xl: 'row',
                                }}
                                justify="space-evenly"
                            >
                                <Box
                                    className="searchUser"
                                    w="90%"
                                    m={3}
                                    px="5px"
                                    bg="gray.200"
                                    rounded={'15px'}
                                    boxShadow={'lg'}
                                >
                                    <HStack>
                                        <FormControl id="searchUser">
                                            <Input
                                                placeholder="Search user info"
                                                _placeholder={{
                                                    color: 'gray.500',
                                                }}
                                                border="0"
                                                _focus={{
                                                    outline: 'none',
                                                    border: '0px',
                                                }}
                                                type="text"
                                                onChange={
                                                    handleChange_searchUser
                                                }
                                                value={searchUser}
                                            />
                                        </FormControl>
                                        <Icon as={MdSearch} h="30px" w="30px" />
                                    </HStack>
                                </Box>
                                <Box
                                    w="90%"
                                    m={3}
                                    bg="#FFFFFF"
                                    rounded={'15px'}
                                    scrollBehavior="smooth"
                                    overflowY="scroll"
                                    overflowX={'hidden'}
                                    maxH="550px"
                                >
                                    <UsersList list={usersList} />
                                </Box>
                            </Flex>
                        </Stack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}
