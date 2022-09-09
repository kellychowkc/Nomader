import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import CallToAction from '../callToActionOnLanding/CallToAction'
import InfiniteGrid from '../infiniteGrid/InfiniteGrid'
import Dock from '../common/dock/Dock'

function Landing() {
    return (
        <Flex
            w="full"
            h="full"
            direction="column"
            justify="center"
            align="center"
        >
            {/* === NavBar === */}
            <Nav />

            {/* === Main Section - Call To Action === */}

            <CallToAction />

            <Flex
                w="90vw"
                h="auto"
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
            <Dock />
        </Flex>
    )
}

export default Landing
