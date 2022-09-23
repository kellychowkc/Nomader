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
    Select,
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import {
    fetchSelfUserProfile,
    updateProfile,
    UserProfile,
} from '../../api/user'
import { AuthState } from '../../redux/state'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const { REACT_APP_API_SERVER } = process.env

const Profile = () => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [imageStore, setImageStore] = useState('')

    // show existing info
    const [profileList, setProfileList] = useState<UserProfile>()
    const auth: AuthState = useSelector((state: any) => state.auth)

    const userId = auth.id

    useEffect(() => {
        fetchSelfUserProfile(userId as any as number).then((data: any) => {
            const dataDetail = data.userDetail.rows[0]
            const time = dataDetail!.created_at!.slice(0, 10)
            dataDetail!.created_at = time
            const updateTime = dataDetail!.updated_at!.slice(0, 10)
            dataDetail!.updated_at = updateTime
            const job = dataDetail.title
            dataDetail!.job = job
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
        },
        onSubmit: async (values: UserProfile) => {
            const res: any = await updateProfile(
                values,
                userId as any as string
            )
            if (res.success) {
                Swal.fire({
                    title: 'Success',
                    text: 'Profile Updated',
                    icon: 'success',
                })
            }
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
                                    <FormControl id="userName">
                                        <FormLabel>Username</FormLabel>
                                        <Input
                                            id="username"
                                            name="username"
                                            placeholder={profileList?.username}
                                            onChange={formik.handleChange}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            value={formik.values.username}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="password">
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
                                    <FormControl id="first_name">
                                        <FormLabel>First Name</FormLabel>
                                        <Input
                                            id="first_name"
                                            name="first_name"
                                            onChange={formik.handleChange}
                                            placeholder={
                                                profileList?.first_name
                                            }
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="last_name">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input
                                            id="last_name"
                                            name="last_name"
                                            onChange={formik.handleChange}
                                            placeholder={profileList?.last_name}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                            id="email"
                                            name="email"
                                            onChange={formik.handleChange}
                                            placeholder={profileList?.email}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="email"
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    {/* Remark */}
                                    <FormControl id="phone_num">
                                        <FormLabel>Phone no.</FormLabel>
                                        <Input
                                            id="phone_num"
                                            name="phone_num"
                                            placeholder={profileList?.phone_num}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="number"
                                            value={formik.values.phone_num}
                                            onChange={formik.handleChange}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="birthday">
                                        <FormLabel>Birthday</FormLabel>
                                        <Input
                                            id="birthday"
                                            name="birthday"
                                            placeholder={profileList?.birthday}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            value={formik.values.birthday}
                                            onChange={formik.handleChange}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    {/* Remark */}
                                    <FormControl id="gender">
                                        <FormLabel>Gender</FormLabel>
                                        <Input
                                            id="gender"
                                            name="gender"
                                            placeholder={profileList?.gender}
                                            _placeholder={{ color: 'gray.500' }}
                                            type="text"
                                            value={formik.values.gender}
                                            onChange={formik.handleChange}
                                        />
                                    </FormControl>
                                </Box>
                                <Box m={3}>
                                    <FormControl id="job">
                                        <FormLabel>Job</FormLabel>
                                        <Select
                                            id="job"
                                            name="job"
                                            onChange={formik.handleChange}
                                            value={formik.values.job}
                                            placeholder={profileList?.job}
                                        >
                                            <option value={1}>student</option>
                                            <option value={2}>slash</option>
                                            <option value={3}>designer</option>
                                            <option value={4}>
                                                programmer
                                            </option>
                                            <option value={5}>
                                                entrepreneur
                                            </option>
                                            <option value={6}>youtuber</option>
                                            <option value={7}>others</option>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box m={3}></Box>
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
                                            id="information"
                                            name="information"
                                            minH="20"
                                            w="100%"
                                            placeholder={
                                                profileList?.information
                                            }
                                            _placeholder={{ color: 'gray.500' }}
                                            value={formik.values.information}
                                            onChange={formik.handleChange}
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
                                    Update
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

export default Profile
function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}
