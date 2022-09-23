import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import CallToAction from './callToActionOnLanding/CallToAction'
import InfiniteGrid from '../Home/infiniteGrid/InfiniteGrid'
import Dock from '../common/dock/Dock'

function Landing() {
    return (
        <Box w="auto" h="full">
            {/* === NavBar === */}
            <Nav />
            <VStack w="auto">
                {/* === Main Section - Call To Action === */}
                <Flex w="90vw" mb="5" justify="center">
                    <CallToAction />
                </Flex>

                <Flex
                    w="90vw"
                    h="auto"
                    flexDirection={['column', 'column', 'row', 'row']}
                    justify="space-between"
                    align="center"
                >
                    <Box
                        w={['100%', '100%', '30%', '30%', '30%']}
                        h={['25vh', '25vh', '20vh', '25vh', '25vh']}
                        mb="5"
                        backgroundColor="#0ABAB5"
                        overflow="hidden"
                        position="relative"
                    >
                        <Image
                            src="https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg"
                            h="100%"
                            fit="cover"
                        ></Image>
                        <VStack
                            w="100%"
                            position="absolute"
                            bottom="0"
                            left="100%/2"
                            backgroundColor="#FFFFFF50"
                        >
                            <Text></Text>
                            <Text fontSize="2xl">Why we do it?</Text>
                            <Text></Text>
                        </VStack>
                    </Box>
                    <Box
                        w={['100%', '100%', '30%', '30%', '30%']}
                        h={['25vh', '25vh', '20vh', '25vh', '25vh']}
                        mb="5"
                        backgroundColor="#0ABAB5"
                        overflow="hidden"
                        position="relative"
                    >
                        <Image
                            src="https://naver.github.io/egjs-infinitegrid/assets/image/11.jpg"
                            h="100%"
                            fit="cover"
                        ></Image>
                        <VStack
                            w="100%"
                            position="absolute"
                            bottom="0"
                            left="100%/2"
                            backgroundColor="#FFFFFF50"
                        >
                            <Text></Text>
                            <Text fontSize="2xl">What do we do?</Text>
                            <Text></Text>
                        </VStack>
                    </Box>
                    <Box
                        w={['100%', '100%', '30%', '30%', '30%']}
                        h={['25vh', '25vh', '20vh', '25vh', '25vh']}
                        mb="5"
                        backgroundColor="#0ABAB5"
                        overflow="hidden"
                        position="relative"
                    >
                        <Image
                            src="https://naver.github.io/egjs-infinitegrid/assets/image/12.jpg"
                            h="100%"
                            fit="cover"
                        ></Image>
                        <VStack
                            w="100%"
                            position="absolute"
                            bottom="0"
                            left="100%/2"
                            backgroundColor="#FFFFFF50"
                        >
                            <Text></Text>
                            <Text fontSize="2xl">How we do it?</Text>
                            <Text></Text>
                        </VStack>
                    </Box>
                </Flex>
                <Box w="90vw">
                    <Container mb="5" centerContent>
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
                            Explore
                        </Text>
                    </Container>
                    <InfiniteGrid />
                </Box>
            </VStack>
            <Dock />
        </Box>
    )
}

export default Landing
