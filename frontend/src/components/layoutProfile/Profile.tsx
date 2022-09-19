import React from 'react'
import {
    Box,
    Heading,
    Text,
    Container,
    VStack,
    Flex,
    Stack,
    Avatar,
    AvatarBadge,
    Button,
    Center,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    useColorModeValue,
    Textarea,
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { SmallCloseIcon } from '@chakra-ui/icons'

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

const Profile = () => {
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

    return (
        <Box w="auto" h="full">
            {/* === NavBar === */}
            <Nav />
            <VStack w="auto">
                <Heading as="h1">Profile</Heading>
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
                    Profile
                </Text>
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                >
                    <Stack
                        spacing={4}
                        w={'full'}
                        maxW={'2xl'}
                        bg={useColorModeValue('white', 'gray.700')}
                        rounded={'xl'}
                        boxShadow={'lg'}
                        p={6}
                        my={12}
                    >
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl' }}
                        >
                            User Profile Edit
                        </Heading>
                        <FormControl id="userIcon">
                            <FormLabel>User Icon</FormLabel>
                            <Stack direction={['column', 'row']} spacing={6}>
                                <Center>
                                    <Avatar
                                        size="xl"
                                        src="https://avatars.dicebear.com/api/male/username.svg"
                                    >
                                        <AvatarBadge
                                            as={IconButton}
                                            size="sm"
                                            rounded="full"
                                            top="-10px"
                                            colorScheme="red"
                                            aria-label="remove Image"
                                            icon={<SmallCloseIcon />}
                                        />
                                    </Avatar>
                                </Center>
                                <Center w="full">
                                    <Button w="full" maxW="md">
                                        Change Icon
                                    </Button>
                                </Center>
                            </Stack>
                        </FormControl>
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
                            <Box m={3}>
                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        placeholder="password"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="password"
                                    />
                                </FormControl>
                            </Box>
                        </Flex>
                        <Text fontSize="1.5em" fontWeight="bold">
                            Personal Info
                        </Text>
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
                </Flex>
            </VStack>
            <Dock />
        </Box>
    )
}

export default Profile
