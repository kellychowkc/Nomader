import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import InfiniteGrid from '../infiniteGrid/InfiniteGrid'

function Landing() {
    return (
        <Container>
            <Text fontSize="3xl">Landing</Text>
            <Box
                w="100%"
                h={['80vh', '60vh', '40vh', '30vh']}
                border="1px"
                borderColor="gray.200"
            >
                Main Box
            </Box>
            <Flex
                flexDirection={['column', 'column', 'row', 'row']}
                w="100%"
                justify="space-between"
                align="center"
            >
                <Box
                    w={['100%', '100%', '30%', '30%']}
                    h={['35vh', '30vh', '25vh', '25vh']}
                    border="1px"
                    borderColor="gray.200"
                >
                    Sub Box #1
                </Box>
                <Box
                    w={['100%', '100%', '30%', '30%']}
                    h={['35vh', '30vh', '25vh', '25vh']}
                    border="1px"
                    borderColor="gray.200"
                >
                    Sub Box #2
                </Box>
                <Box
                    w={['100%', '100%', '30%', '30%']}
                    h={['35vh', '30vh', '25vh', '25vh']}
                    border="1px"
                    borderColor="gray.200"
                >
                    Sub Box #3
                </Box>
            </Flex>
            {/* <Grid
                templateAreas={`"header header"
              "nav main" 
              "nav footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                h="200px"
                gap="1"
                color="blackAlpha.700"
                fontWeight="bold"
            >
                <GridItem pl="2" bg="orange.300" area={'header'}>
                    Header
                </GridItem>
                <GridItem pl="2" bg="pink.300" area={'nav'}>
                    Nav
                </GridItem>
                <GridItem pl="2" bg="green.300" area={'main'}>
                    Main
                </GridItem>
                <GridItem pl="2" bg="blue.300" area={'footer'}>
                    Footer
                </GridItem>
            </Grid> */}
            <InfiniteGrid />
        </Container>
    )
}

export default Landing
