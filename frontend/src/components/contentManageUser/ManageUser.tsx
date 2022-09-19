import {
    Avatar,
    AvatarBadge,
    Box,
    Button,
    Center,
    chakra,
    Circle,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    HStack,
    Icon,
    IconButton,
    Input,
    SimpleGrid,
    Stack,
    Stat,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Td,
    Text,
    Textarea,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import React from 'react'
import { ReactNode } from 'react'

import {
    MdAttractions,
    MdNaturePeople,
    MdSearch,
    MdTimelapse,
} from 'react-icons/md'

interface IUser {
    name: string
    username: string
    avatar: string
}

const usersList = [
    { name: 'Adams', username: 'adamsishandsome', avatar: 'green' },
    { name: 'Jason', username: 'jasonishandsome', avatar: 'blue' },
    { name: 'Bruce', username: 'bruceishandsome', avatar: 'yellow' },
    { name: 'Lin', username: 'linisgoodlooking', avatar: 'purple' },
    { name: 'Adams', username: 'adamsishandsome', avatar: 'green' },
    { name: 'Jason', username: 'jasonishandsome', avatar: 'blue' },
    { name: 'Bruce', username: 'bruceishandsome', avatar: 'yellow' },
    { name: 'Lin', username: 'linisgoodlooking', avatar: 'purple' },
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

const user: IProfile = {
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
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'}>{title}</StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
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

export default function ManageUser() {
    const [username, setUsername] = React.useState(user.username)
    const handleChange_username = (event: any) =>
        setUsername(event.target.value)

    const [phone, setPhone] = React.useState(user.phone_num)
    const handleChange_phone = (event: any) => setPhone(event.target.value)

    const [birthday, setBirthday] = React.useState(user.birthday)
    const handleChange_birthday = (event: any) =>
        setBirthday(event.target.value)

    const [information, setInformation] = React.useState('')
    const handleChange_information = (event: any) =>
        setInformation(event.target.value)

    const [gender, setGender] = React.useState('')
    const handleChange_gender = (event: any) => setGender(event.target.value)

    const [searchUser, setSearchUser] = React.useState('')
    const handleChange_searchUser = (event: any) =>
        setSearchUser(event.target.value)

    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}
            >
                User Management
            </chakra.h1>

            <Container py={5} maxW={'container.4xl'}>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                    gap={6}
                >
                    <GridItem w="100%" maxH="50%">
                        <Stack
                            spacing={4}
                            w={'full'}
                            maxW={'xl'}
                            bg={useColorModeValue('white', 'gray.700')}
                            rounded={'xl'}
                            boxShadow={'lg'}
                            p={6}
                        >
                            <SimpleGrid
                                columns={{ base: 1, md: 3 }}
                                spacing={{ base: 5, lg: 8 }}
                            >
                                <StatsCard
                                    title={'Active Time (minute/day)'}
                                    stat={'15 minutes'}
                                    icon={<MdTimelapse size={'2em'} />}
                                />
                                <StatsCard
                                    title={'User Match Count/%'}
                                    stat={'10/20%'}
                                    icon={<MdNaturePeople size={'2em'} />}
                                />
                                <StatsCard
                                    title={'Activty by Category '}
                                    stat={'7'}
                                    icon={<MdAttractions size={'2em'} />}
                                />
                            </SimpleGrid>
                            <Heading
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl' }}
                            >
                                User Profile
                            </Heading>

                            <Box fontSize="sm" color="#363636">
                                <Text>Member since: {user.created_at}</Text>
                                <Text>Last update: {user.updated_at}</Text>
                            </Box>

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
                                {/* Remark */}
                                <Box m={3}>
                                    <FormControl id="userName" isRequired>
                                        <FormLabel>User name</FormLabel>
                                        <Input
                                            placeholder="UserName"
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            onChange={handleChange_username}
                                            value={username}
                                        />
                                    </FormControl>
                                </Box>
                            </Flex>

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
                                {/* Remark */}
                                <Box m={3}>
                                    <FormControl id="first_name" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input
                                            placeholder="First name"
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            value={user.first_name}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="last_name" isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input
                                            placeholder="Last name"
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            value={user.last_name}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="email" isRequired>
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                            placeholder="your-email@example.com"
                                            _placeholder={{ color: 'gray.500' }}
                                            type="email"
                                            value={user.email}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    {/* Remark */}
                                    <FormControl id="phone_num" isRequired>
                                        <FormLabel>Phone no.</FormLabel>
                                        <Input
                                            placeholder="Phone no."
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            onChange={handleChange_phone}
                                            value={phone}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="birthday">
                                        <FormLabel>Birthday</FormLabel>
                                        <Input
                                            placeholder="Birthday"
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            onChange={handleChange_birthday}
                                            value={birthday}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    {/* Remark */}
                                    <FormControl id="gender">
                                        <FormLabel>Gender</FormLabel>
                                        <Input
                                            placeholder="M/F/T..."
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            onChange={handleChange_gender}
                                            value={gender}
                                        />
                                    </FormControl>
                                </Box>
                            </Flex>
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
                                justify="center"
                                align="center"
                            >
                                <Box m={3} w="90%">
                                    {/* Remark */}
                                    <FormControl id="information">
                                        <FormLabel>Information</FormLabel>
                                        <Textarea
                                            minH="20"
                                            w="100%"
                                            placeholder="About you."
                                            _placeholder={{ color: 'gray.500' }}
                                            onChange={handleChange_information}
                                            value={information}
                                        />
                                    </FormControl>
                                </Box>
                            </Flex>

                            <Stack spacing={6} direction={['column', 'row']}>
                                <Button
                                    bg={'red.400'}
                                    color={'white'}
                                    w="full"
                                    _hover={{
                                        bg: 'red.500',
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    w="full"
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                >
                                    Submit
                                </Button>
                            </Stack>
                        </Stack>
                    </GridItem>
                    <GridItem w="100%" maxH="50%">
                        {/* ============== */}
                        <Stack
                            spacing={4}
                            w={'full'}
                            maxW={'xl'}
                            bg={useColorModeValue('white', 'gray.700')}
                            rounded={'xl'}
                            boxShadow={'lg'}
                            p={6}
                        >
                            <Heading
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl' }}
                            >
                                User List
                            </Heading>

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
                                {/* Remark */}
                                <Box
                                    w="90%"
                                    m={3}
                                    px="5px"
                                    bg="gray.200"
                                    rounded={'15px'}
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
                                    px="5px"
                                    bg="gray.100"
                                    rounded={'15px'}
                                    overflowY="auto"
                                    maxH="60vh"
                                >
                                    <VStack>
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
                                                    <Th>
                                                        View User Detail Profile
                                                    </Th>
                                                </Tr>
                                            </Thead>

                                            <Tbody>
                                                {usersList.map(
                                                    (
                                                        user: IUser,
                                                        idx: number
                                                    ) => (
                                                        <Tr key={idx}>
                                                            <Td>
                                                                <HStack>
                                                                    <Box className="friendAvatar">
                                                                        <Circle
                                                                            size="30px"
                                                                            bg={
                                                                                user.avatar
                                                                            }
                                                                        />
                                                                    </Box>
                                                                    <VStack align="left">
                                                                        <Text
                                                                            className="nickname"
                                                                            fontWeight="bold"
                                                                        >
                                                                            {
                                                                                user.name
                                                                            }
                                                                        </Text>
                                                                        <Text className="username">
                                                                            {
                                                                                user.username
                                                                            }
                                                                        </Text>
                                                                    </VStack>
                                                                </HStack>
                                                            </Td>
                                                            <Td>
                                                                <Button m="1">
                                                                    Detail
                                                                </Button>
                                                            </Td>
                                                        </Tr>
                                                    )
                                                )}
                                            </Tbody>
                                        </Table>
                                    </VStack>
                                </Box>
                            </Flex>
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
                                justify="center"
                                align="center"
                            ></Flex>
                        </Stack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}
