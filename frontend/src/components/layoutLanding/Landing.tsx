import { Box, Container, Flex, Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import CallToAction from '../callToActionOnLanding/CallToAction'
import InfiniteGrid from '../infiniteGrid/InfiniteGrid'
import Nav from '../navBar/NavBar'

function Landing() {
    return (
        <>
            <Box w="90vw" h="auto" mb="3">
                <Nav />
            </Box>
            <Box w="90vw" h={['90vh', '60vh', '50vh', '50vh', '50vh']} mb="3">
                <CallToAction />
            </Box>
            <Flex
                w="90vw"
                mb="3"
                flexDirection={['column', 'column', 'row', 'row']}
                justify="space-between"
                align="center"
            >
                <Box
                    w={['100%', '100%', '30%', '30%', '30%']}
                    h={['30vh', '25vh', '25vh', '30vh', '35vh']}
                    border="1px"
                    borderColor="gray.200"
                    backgroundColor="#0ABAB5"
                >
                    <Image></Image>
                    <Text>Sub Box #1</Text>
                </Box>
                <Box
                    w={['100%', '100%', '30%', '30%', '30%']}
                    h={['30vh', '25vh', '25vh', '30vh', '35vh']}
                    border="1px"
                    borderColor="gray.200"
                    backgroundColor="#0ABAB5"
                >
                    <Image></Image>
                    <Text>Sub Box #2</Text>
                </Box>
                <Box
                    w={['100%', '100%', '30%', '30%', '30%']}
                    h={['30vh', '25vh', '25vh', '30vh', '35vh']}
                    border="1px"
                    borderColor="gray.200"
                    backgroundColor="#0ABAB5"
                >
                    <Image></Image>
                    <Box>
                        <Text>Sub Box #3</Text>
                    </Box>
                </Box>
            </Flex>
            <Box w="90vw">
                <InfiniteGrid />
            </Box>
        </>
    )
}

export default Landing
