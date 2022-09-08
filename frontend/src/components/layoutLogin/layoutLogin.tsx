import {
    Box,
    Button,
    Checkbox,
    Flex,
    Input,
    VStack,
    Text,
    Image,
    Divider,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import React from 'react'

function LayoutLogin() {
    return (
        <Flex
            backgroundColor="grey"
            h="100vh"
            w={['90vw', '90vw', '80vw', '70vw']}
            direction={['column', 'column', 'row', 'row']}
            justify={['flex-end', 'flex-end', 'center', 'center']}
            align="center"
        >
            <Box position="absolute" top="0" zIndex="100">
                <Text fontSize="5xl" align="center">
                    Login
                </Text>
            </Box>
            <Box
                backgroundColor="#0ABAB5"
                h={['100%', '100%', '400px', '400px']}
                w={['100%', '100%', '400px', '400px']}
                position={['absolute', 'absolute', 'relative', 'relative']}
                top="0"
                left="0"
            >
                <Image></Image>
            </Box>
            <Box
                backgroundColor="pink"
                h={['60%', '60%', '400px', '400px']}
                w={['100%', '100%', '400px', '400px']}
                p="5"
                display="flex"
                justifyContent="center"
                alignItems="center"
                zIndex="100"
            >
                <VStack w="80%" align="center">
                    <Input placeholder="Email" size="md" />
                    <Input placeholder="Password" size="md" />
                    <Checkbox>Remember Me</Checkbox>
                    <Button as="a" href="/login" w="80%" fontSize="lg">
                        Login
                    </Button>

                    <Divider />

                    <Text>
                        New User? <Link to="/signup">Sign up</Link>
                    </Text>
                </VStack>
            </Box>
        </Flex>
    )
}

export default LayoutLogin
