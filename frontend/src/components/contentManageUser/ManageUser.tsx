import {
    Box,
    chakra,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Text,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiServer } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

interface StatsCardProps {
    title: string
    stat: string
    icon: ReactNode
}
function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}
        >
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'}>{title}</StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}
                >
                    {icon}
                </Box>
            </Flex>
        </Stat>
    )
}

export default function ManageUser() {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}
            >
                User Management
            </chakra.h1>
            <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 5, lg: 8 }}
            >
                <StatsCard
                    title={'Active Users'}
                    stat={'5,000'}
                    icon={<BsPerson size={'3em'} />}
                />
                <StatsCard
                    title={'Servers'}
                    stat={'1,000'}
                    icon={<FiServer size={'3em'} />}
                />
                <StatsCard
                    title={'Users '}
                    stat={'7'}
                    icon={<GoLocation size={'3em'} />}
                />
            </SimpleGrid>
            <Container py={5} maxW={'container.lg'}>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    }}
                    gap={6}
                >
                    <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                        <Heading as={'h2'}>Medium Length Title</Heading>
                    </GridItem>
                    <GridItem w="100%">
                        <Flex flexDirection={'column'}>
                            <Text fontSize={'4xl'} fontWeight={'bold'}>
                                20%
                            </Text>
                            <Box fontSize={'sm'}>
                                Description for the number. People always pay
                                attention to numbers.
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem w="100%">
                        <Flex flexDirection={'column'}>
                            <Text fontSize={'4xl'} fontWeight={'bold'}>
                                20%
                            </Text>
                            <Box fontSize={'sm'}>
                                Description for the number. People always pay
                                attention to numbers.
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}
