import { Box, Flex, VStack } from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import CallToAction from './CallToAction'
import InfiniteGrid from './InfiniteGrid'
import Dock from '../common/dock/Dock'
import SideMenu from '../common/sideMenu/SideMenu'

function Landing() {
    const windowWidth = window.innerWidth
    return (
        <Box w="auto" h="full">
            <Nav />
            <Box display={'flex'}>
                <VStack w="100%">
                    <Flex w="90vw" mb={1} justify="center">
                        <CallToAction />
                    </Flex>
                    <Box w="90vw">
                        <InfiniteGrid />
                    </Box>
                </VStack>
            </Box>
            {windowWidth > 850 ? <></> : <Dock />}
        </Box>
    )
}

export default Landing
