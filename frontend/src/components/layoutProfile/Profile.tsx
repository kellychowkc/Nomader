import React from 'react'
import { Box, Heading, Text, Container, VStack, Flex } from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'

interface IProfile {
    name: string
    username: string
    avatar: string
}

const profile = [
    { name: 'Adams', username: 'adamsishandsome', avatar: 'green' },
]

const Profile = () => {
    return (
        <Container w="full" h="full" maxW="max" p="0">
            <Flex
                w="full"
                h="full"
                direction="column"
                justify="center"
                align="center"
            >
                {/* === NavBar === */}
                <Nav />
                <Heading as="h1">Profile</Heading>
                <p></p>
                <div>{profile[0].name}</div>
                <VStack w="98vw">{/* Content */}</VStack>
                <Dock />
            </Flex>
        </Container>
    )
}

export default Profile
