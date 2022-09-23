import React, { useEffect, useState } from 'react'
import {
    Box,
    Heading,
    Text,
    VStack,
    Flex,
    Stack,
    Avatar,
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
    Textarea,
    InputRightElement,
    InputGroup,
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import { fetchSelfUserProfile, UserProfile } from '../../api/user'
import { AuthState } from '../../redux/state'
import { useSelector } from 'react-redux'

const { REACT_APP_API_SERVER } = process.env

const EditProfile = () => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [imageStore, setImageStore] = useState('')

    // show existing info
    const [profileList, setProfileList] = useState<UserProfile>()
    const auth: AuthState = useSelector((state: any) => state.auth)

    const userId = auth.id

    useEffect(() => {
        fetchSelfUserProfile(userId as any as number).then((data: any) => {
            const dataDetail = data.userDetail
            const time = dataDetail!.created_at!.slice(0, 10)
            dataDetail!.created_at = time
            const updateTime = dataDetail!.updated_at!.slice(0, 10)
            dataDetail!.updated_at = updateTime
            const profilePath =
                `${REACT_APP_API_SERVER}/profile/` + dataDetail.profile
            dataDetail.profile = profilePath
            setProfileList(dataDetail)
        })
    }, [])

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
            phone_num: '',
            birthday: '',
            gender: '',
            information: '',
            profile: new File([''], ''),
            newProfile: new File([''], ''),
            job: '',
            emergency_contact_person: '',
            emergency_contact_num: null,
            country: '',
        },
        onSubmit: async (values: UserProfile) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    function handleImageChange(e: any) {
        const file = e.target.files[0]
        const reader = new FileReader()
        const url = reader.readAsDataURL(file)
        reader.onloadend = function (e) {
            setImageStore(reader.result as string)
            formik.setFieldValue('newProfile', file)
        }
    }
    return (
        <Box w="auto" h="full">
            {/* === NavBar === */}
            <Nav />
            <VStack w="auto">
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
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl id="userIcon">
                                <FormLabel>User Icon</FormLabel>
                                <Stack
                                    direction={['column', 'row']}
                                    spacing={6}
                                >
                                    <Center>
                                        {imageStore === '' ? (
                                            <Avatar
                                                size="2xl"
                                                src={
                                                    profileList?.profile as any as string
                                                }
                                            ></Avatar>
                                        ) : (
                                            <Avatar
                                                size="2xl"
                                                src={imageStore}
                                            ></Avatar>
                                        )}
                                    </Center>
                                    <Center w="full">
                                        <input
                                            type="file"
                                            onChange={handleImageChange}
                                            id="profile"
                                            name="profile"
                                            // className={styles.uploadBtn}
                                        ></input>
                                        <p>Upload Profile Picture</p>
                                    </Center>
                                </Stack>
                            </FormControl>
                            <Box fontSize="sm" color="#363636">
                                <Text>
                                    Member since: {profileList?.created_at}
                                </Text>
                                <Text>
                                    Last update: {profileList?.updated_at}
                                </Text>
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
                                        <FormLabel>Username</FormLabel>
                                        <Input
                                            placeholder={profileList?.username}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            value={formik.values.username}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="password" isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup>
                                            <Input
                                                id="password"
                                                name="password"
                                                onChange={formik.handleChange}
                                                value={formik.values.password}
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder="New Password"
                                            />
                                            <InputRightElement h={'full'}>
                                                <Button
                                                    variant={'ghost'}
                                                    onClick={() =>
                                                        setShowPassword(
                                                            (showPassword) =>
                                                                !showPassword
                                                        )
                                                    }
                                                >
                                                    {showPassword ? (
                                                        <ViewIcon />
                                                    ) : (
                                                        <ViewOffIcon />
                                                    )}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
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
                                            placeholder={
                                                profileList?.first_name
                                            }
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="last_name" isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input
                                            placeholder={profileList?.last_name}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="email" isRequired>
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                            placeholder={profileList?.email}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="email"
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    {/* Remark */}
                                    <FormControl id="phone_num" isRequired>
                                        <FormLabel>Phone no.</FormLabel>
                                        <Input
                                            placeholder={profileList?.phone_num}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            value={formik.values.phone_num}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="birthday">
                                        <FormLabel>Birthday</FormLabel>
                                        <Input
                                            placeholder={profileList?.birthday}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            value={formik.values.birthday}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    {/* Remark */}
                                    <FormControl id="gender">
                                        <FormLabel>Gender</FormLabel>
                                        <Input
                                            placeholder={profileList?.gender}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            value={formik.values.gender}
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
                                            placeholder={
                                                profileList?.information
                                            }
                                            _placeholder={{ color: 'gray.500' }}
                                            value={formik.values.password}
                                        />
                                    </FormControl>
                                </Box>
                            </Flex>

                            <Stack spacing={6} direction={['column', 'row']}>
                                <Button
                                    bgImage={
                                        'linear-gradient(to right,#569ee6, #67d6f8, #b0d8bc)'
                                    }
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Flex>
            </VStack>
            <Dock />
        </Box>
    )
}

export default EditProfile
