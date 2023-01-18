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
    Button,
    VStack,
    StatHelpText,
    StatArrow,
    HStack,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import {
    MdAttractions,
    MdFactCheck,
    MdOutlineTimer,
    MdPerson,
    MdPersonAdd,
    MdTimelapse,
} from 'react-icons/md'

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
            bg="#FFFFFF"
            rounded={'lg'}
        >
            <VStack h="full" justifyContent={'center'} alignItems={'center'}>
                <Flex justifyContent={'space-between'}>
                    <Box pl={{ base: 2, md: 4 }}>
                        <StatLabel fontSize={'lg'} fontWeight={'medium'}>
                            {title}
                        </StatLabel>
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
                <HStack
                    w="full"
                    justifyContent={{ base: 'center', sm: 'space-evenly' }}
                >
                    <Button
                        size={{ base: 'sm', md: 'xs', lg: 'md' }}
                        colorScheme={'teal'}
                    >
                        Day
                    </Button>
                    <Button
                        size={{ base: 'sm', md: 'xs', lg: 'md' }}
                        colorScheme={'teal'}
                    >
                        Week
                    </Button>
                    <Button
                        size={{ base: 'sm', md: 'xs', lg: 'md' }}
                        colorScheme={'teal'}
                    >
                        Month
                    </Button>
                </HStack>
            </VStack>
        </Stat>
    )
}

function ActiveStatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            bg="#FFFFFF"
            rounded={'lg'}
        >
            <VStack h="full" justifyContent={'center'} alignItems={'center'}>
                <Flex justifyContent={'space-between'}>
                    <Box pl={{ base: 2, md: 4 }}>
                        <StatLabel fontSize={'lg'} fontWeight={'medium'}>
                            {title}
                        </StatLabel>
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
                <HStack
                    w="full"
                    justifyContent={{ base: 'center', sm: 'space-evenly' }}
                >
                    <Button
                        size={{ base: 'sm', md: 'xs', lg: 'md' }}
                        colorScheme={'cyan'}
                    >
                        Day
                    </Button>
                    <Button
                        size={{ base: 'sm', md: 'xs', lg: 'md' }}
                        colorScheme={'cyan'}
                    >
                        Week
                    </Button>
                    <Button
                        size={{ base: 'sm', md: 'xs', lg: 'md' }}
                        colorScheme={'cyan'}
                    >
                        Month
                    </Button>
                </HStack>
            </VStack>
        </Stat>
    )
}

export default function Dashboard() {
    return (
        <Box maxW="7xl" px={{ base: 0 }}>
            <Box w={'100vw'} h={'100vh'}>
                <iframe
                    title="charts"
                    width={`${window.innerWidth * 0.85}`}
                    height={`${window.innerHeight * 0.85}`}
                    src="https://datastudio.google.com/embed/reporting/a09d7e5e-8f21-4da7-8f44-fdc08b7deff3/page/p_3vlkq3a2yc"
                    frameBorder="0"
                ></iframe>
            </Box>
        </Box>
    )
}
