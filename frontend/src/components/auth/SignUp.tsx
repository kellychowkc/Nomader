import styles from './SignUp.module.css'
import { useFormik } from 'formik'
import {
    Box,
    FormControl,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Select,
    Link,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { FaTransgender, FaBirthdayCake } from 'react-icons/fa'

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [nextPage, setNextPage] = useState(false)
    const [imageStore, setImageStore] = useState('')

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            birthday: '',
            username: '',
            email: '',
            password: '',
            phoneNum: '',
            country: '',
            profile: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    function toNextPage() {
        setNextPage(!nextPage)
    }

    function handleImageChange(e: any) {
        const file = e.target.files[0]
        const reader = new FileReader()
        const url = reader.readAsDataURL(file)
        reader.onloadend = function (e) {
            // console.log('check check url', reader.result)
            setImageStore(reader.result as string)
            // console.log('show url', url)
        }
        // console.log(file)
    }

    return (
        <div className={styles.body}>
            <div className={styles.logoContainer}>
                <img
                    src={require('../../assets/loginBackground.jpg')}
                    alt="background"
                ></img>
                <div className={styles.logo}>Logo</div>
            </div>
            <div className={styles.signInContainer}>
                <Stack spacing={4} mx={'auto'} maxW={'lg'} px={5}>
                    <Stack align={'left'}>
                        <Heading
                            fontSize={'4xl'}
                            color={'#b0d8bc'}
                            fontWeight={'500'}
                            margin={'0'}
                        >
                            Sign up
                        </Heading>
                    </Stack>
                    <form onSubmit={formik.handleSubmit}>
                        {!nextPage ? (
                            <Stack spacing={2}>
                                <HStack>
                                    <Box>
                                        <FormControl id="firstName" isRequired>
                                            <Input
                                                type="text"
                                                placeholder={'First Name'}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl id="lastName" isRequired>
                                            <Input
                                                type="text"
                                                placeholder={'Last Name'}
                                            />
                                        </FormControl>
                                    </Box>
                                </HStack>
                                <HStack>
                                    <Box>
                                        <FaTransgender />
                                    </Box>
                                    <Box>
                                        <FormControl isRequired>
                                            <Select>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FaBirthdayCake />
                                    </Box>
                                    <Box>
                                        <FormControl isRequired>
                                            <Input
                                                placeholder="Birthday"
                                                size="md"
                                                type="date"
                                            />
                                        </FormControl>
                                    </Box>
                                </HStack>
                                <FormControl id="username" isRequired>
                                    <Input
                                        type="text"
                                        placeholder={'Username'}
                                    />
                                </FormControl>
                                <FormControl id="email" isRequired>
                                    <Input type="email" placeholder={'Email'} />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <InputGroup>
                                        <Input
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            placeholder={'Password'}
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
                                <HStack>
                                    <Box>
                                        <FormControl isRequired>
                                            <Select placeholder={'Country'}>
                                                <option>US</option>
                                                <option>UK</option>
                                                <option>HK</option>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl isRequired>
                                            <Input
                                                type="number"
                                                placeholder={'Phone Number'}
                                            />
                                        </FormControl>
                                    </Box>
                                </HStack>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        bgImage={
                                            'linear-gradient(to right,#569ee6, #67d6f8, #b0d8bc)'
                                        }
                                        className={styles.btn}
                                        onClick={() => {
                                            toNextPage()
                                        }}
                                    >
                                        Next
                                    </Button>
                                </Stack>
                                <Stack spacing={10} align={'center'}>
                                    <Link color={'blue.400'}>
                                        Already user? Login
                                    </Link>
                                </Stack>
                            </Stack>
                        ) : (
                            <Stack spacing={8} pt={2}>
                                <FormControl id="profile">
                                    <Stack
                                        direction={['column', 'row']}
                                        spacing={10}
                                    >
                                        <Center>
                                            <div>
                                                <img src={imageStore} />
                                                <input
                                                    type="file"
                                                    onChange={handleImageChange}
                                                ></input>
                                            </div>
                                        </Center>
                                        <Center w="full">
                                            <Button w="full"></Button>
                                        </Center>
                                    </Stack>
                                </FormControl>
                                <HStack>
                                    <FormControl isRequired>
                                        <Select placeholder={'Job'}>
                                            <option>Slash</option>
                                            <option>Software Engineer</option>
                                            <option>Entrepreneur</option>
                                        </Select>
                                    </FormControl>
                                </HStack>
                                <FormControl isRequired>
                                    <Textarea placeholder="Write a bio" />
                                </FormControl>
                                <Stack
                                    spacing={6}
                                    direction={['column', 'row']}
                                >
                                    <Button
                                        bgImage={
                                            'linear-gradient(to right,#314755, #26a0da)'
                                        }
                                        className={styles.btn}
                                        onClick={() => {
                                            toNextPage()
                                        }}
                                    >
                                        Return
                                    </Button>
                                    <Button
                                        bgImage={
                                            'linear-gradient(to right,#569ee6, #67d6f8, #b0d8bc)'
                                        }
                                        className={styles.btn}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </Stack>
                        )}
                    </form>
                </Stack>
            </div>
        </div>
    )
}

export default SignUp
