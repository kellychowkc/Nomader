import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Box,
} from '@chakra-ui/react'
import { useFormik } from 'formik'

export default function LayoutLogin() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <Box w="90vw" h="auto" mb="3">
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'2xl'}>
                            Sign in to your account
                        </Heading>

                        <form onSubmit={formik.handleSubmit}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.500'}>
                                        Forgot password?
                                    </Link>
                                </Stack>
                                <Button
                                    type="submit"
                                    colorScheme={'blue'}
                                    variant={'solid'}
                                >
                                    Sign in
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                        }
                    />
                </Flex>
            </Stack>
        </Box>
    )
}

// import {
//     Box,
//     Button,
//     Checkbox,
//     Flex,
//     Input,
//     VStack,
//     Text,
//     Image,
//     Divider,
// } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'

// import React from 'react'

// function LayoutLogin() {
//     return (
//         <Flex
//             backgroundColor="grey"
//             h="100vh"
//             w={['90vw', '90vw', '80vw', '70vw']}
//             direction={['column', 'column', 'row', 'row']}
//             justify={['flex-end', 'flex-end', 'center', 'center']}
//             align="center"
//         >
//             <Box position="absolute" top="0" zIndex="100">
//                 <Text fontSize="5xl" align="center">
//                     Login
//                 </Text>
//             </Box>
//             <Box
//                 backgroundColor="#0ABAB5"
//                 h={['100%', '100%', '400px', '400px']}
//                 w={['100%', '100%', '400px', '400px']}
//                 position={['absolute', 'absolute', 'relative', 'relative']}
//                 top="0"
//                 left="0"
//             >
//                 <Image></Image>
//             </Box>
//             <Box
//                 backgroundColor="pink"
//                 h={['60%', '60%', '400px', '400px']}
//                 w={['100%', '100%', '400px', '400px']}
//                 p="5"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 zIndex="100"
//             >
//                 <VStack w="80%" align="center">
//                     <Input placeholder="Email" size="md" />
//                     <Input placeholder="Password" size="md" />
//                     <Checkbox>Remember Me</Checkbox>
//                     <Button as="a" href="/login" w="80%" fontSize="lg">
//                         Login
//                     </Button>

//                     <Divider />

//                     <Text>
//                         New User? <Link to="/signup">Sign up</Link>
//                     </Text>
//                 </VStack>
//             </Box>
//         </Flex>
//     )
// }

// export default LayoutLogin
