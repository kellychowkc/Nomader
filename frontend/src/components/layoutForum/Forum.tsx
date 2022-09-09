import React from 'react'
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
    Flex,
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'

interface IBlogTags {
    tags: Array<string>
    marginTop?: SpaceProps['marginTop']
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag
                        size={'md'}
                        variant="solid"
                        backgroundColor="#0ABAB5"
                        key={tag}
                    >
                        {tag}
                    </Tag>
                )
            })}
        </HStack>
    )
}

interface BlogAuthorProps {
    date: Date
    name: string
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    )
}

const Forum = () => {
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

                <Heading as="h1">Nomad Forum</Heading>

                {/* Post */}
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"
                    flexDirection={{ sm: 'column', lg: 'row' }}
                    justifyContent="space-between"
                >
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box
                            width={{ base: '80%', sm: '85%', lg: '60%' }}
                            zIndex="2"
                            // marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%"
                            display="flex"
                            alignItems="flex-end"
                        >
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: 'none' }}
                            >
                                <Image
                                    borderRadius="lg"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                        <Box
                            zIndex="1"
                            width="100%"
                            position="absolute"
                            height="100%"
                        >
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(#0ABAB5 1px, transparent 1px)',
                                    'radial(#0ABAB5 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '3' }}
                    >
                        <BlogTags tags={['Hong Kong', 'Product']} />
                        <Heading marginTop="1">
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: 'none' }}
                            >
                                Building Nomader Web App
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg"
                        >
                            We are building a Nomader Web App written in React
                            and PWA ready. Bridging the portability of Web App
                            and stability and consistency of Native App
                            together.
                        </Text>
                        <BlogAuthor
                            name="Nomad#2 WTF"
                            date={new Date('2022-09-06T19:01:27Z')}
                        />
                    </Box>
                </Box>
                {/* Post */}

                {/* Post */}
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"
                    flexDirection={{ sm: 'column', lg: 'row' }}
                    justifyContent="space-between"
                >
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center"
                    >
                        <Box
                            width={{ base: '80%', sm: '85%', lg: '60%' }}
                            zIndex="2"
                            // marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%"
                        >
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: 'none' }}
                            >
                                <Image
                                    borderRadius="lg"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                        <Box
                            zIndex="1"
                            width="100%"
                            position="absolute"
                            height="100%"
                        >
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(#0ABAB5 1px, transparent 1px)',
                                    'radial(#0ABAB5 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '3' }}
                    >
                        <BlogTags tags={['Hong Kong', 'Product']} />
                        <Heading marginTop="1">
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: 'none' }}
                            >
                                Building Nomader Web App
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg"
                        >
                            We are building a Nomader Web App written in React
                            and PWA ready. Bridging the portability of Web App
                            and stability and consistency of Native App
                            together.
                        </Text>
                        <BlogAuthor
                            name="Nomad#2 WTF"
                            date={new Date('2022-09-06T19:01:27Z')}
                        />
                    </Box>
                </Box>
                {/* Post */}

                {/* Post */}
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"
                    flexDirection={{ sm: 'column', lg: 'row' }}
                    justifyContent="space-between"
                >
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center"
                    >
                        <Box
                            width={{ base: '80%', sm: '85%', lg: '60%' }}
                            zIndex="2"
                            // marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%"
                        >
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: 'none' }}
                            >
                                <Image
                                    borderRadius="lg"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                        <Box
                            zIndex="1"
                            width="100%"
                            position="absolute"
                            height="100%"
                        >
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(#0ABAB5 1px, transparent 1px)',
                                    'radial(#0ABAB5 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '3' }}
                    >
                        <BlogTags tags={['Hong Kong', 'Product']} />
                        <Heading marginTop="1">
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: 'none' }}
                            >
                                Building Nomader Web App
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg"
                        >
                            We are building a Nomader Web App written in React
                            and PWA ready. Bridging the portability of Web App
                            and stability and consistency of Native App
                            together.
                        </Text>
                        <BlogAuthor
                            name="Nomad#2 WTF"
                            date={new Date('2022-09-06T19:01:27Z')}
                        />
                    </Box>
                </Box>
                {/* Post */}
                {/* Post */}
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"
                    flexDirection={{ sm: 'column', lg: 'row' }}
                    justifyContent="space-between"
                >
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center"
                    >
                        <Box
                            width={{ base: '80%', sm: '85%', lg: '60%' }}
                            zIndex="2"
                            // marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%"
                        >
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: 'none' }}
                            >
                                <Image
                                    borderRadius="lg"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                        <Box
                            zIndex="1"
                            width="100%"
                            position="absolute"
                            height="100%"
                        >
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(#0ABAB5 1px, transparent 1px)',
                                    'radial(#0ABAB5 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '3' }}
                    >
                        <BlogTags tags={['Hong Kong', 'Product']} />
                        <Heading marginTop="1">
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: 'none' }}
                            >
                                Building Nomader Web App
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg"
                        >
                            We are building a Nomader Web App written in React
                            and PWA ready. Bridging the portability of Web App
                            and stability and consistency of Native App
                            together.
                        </Text>
                        <BlogAuthor
                            name="Nomad#2 WTF"
                            date={new Date('2022-09-06T19:01:27Z')}
                        />
                    </Box>
                </Box>
                {/* Post */}

                <Heading as="h2" marginTop="5">
                    Latest articles
                </Heading>
                <Divider marginTop="5" />
                <Wrap spacing="30px" marginTop="5">
                    <WrapItem
                        width={{
                            base: '100%',
                            sm: '45%',
                            md: '45%',
                            lg: '30%',
                        }}
                    >
                        <Box w="100%">
                            <Box borderRadius="lg" overflow="hidden">
                                <Link
                                    textDecoration="none"
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    <Image
                                        transform="scale(1.0)"
                                        src={
                                            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                        }
                                        alt="some text"
                                        objectFit="contain"
                                        width="100%"
                                        transition="0.3s ease-in-out"
                                        _hover={{
                                            transform: 'scale(1.05)',
                                        }}
                                    />
                                </Link>
                            </Box>
                            <BlogTags
                                tags={['Engineering', 'Product']}
                                marginTop="3"
                            />
                            <Heading fontSize="xl" marginTop="2">
                                <Link
                                    textDecoration="none"
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    Some blog title
                                </Link>
                            </Heading>
                            <Text as="p" fontSize="md" marginTop="2">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Text>
                            <BlogAuthor
                                name="John Doe"
                                date={new Date('2021-04-06T19:01:27Z')}
                            />
                        </Box>
                    </WrapItem>
                </Wrap>
                <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: 40 }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text
                                fontWeight="bold"
                                textTransform="uppercase"
                                fontSize="sm"
                                letterSpacing="wide"
                                color="teal.600"
                            >
                                Marketing
                            </Text>
                            <Link
                                mt={1}
                                display="block"
                                fontSize="lg"
                                lineHeight="normal"
                                fontWeight="semibold"
                                href="#"
                            >
                                Finding customers for your new business
                            </Link>
                            <Text mt={2} color="gray.500">
                                Getting a new business off the ground is a lot
                                of hard work. Here are five ideas you can use to
                                find your first customers.
                            </Text>
                        </Box>
                    </Box>
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: 40 }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text
                                fontWeight="bold"
                                textTransform="uppercase"
                                fontSize="sm"
                                letterSpacing="wide"
                                color="teal.600"
                            >
                                Marketing
                            </Text>
                            <Link
                                mt={1}
                                display="block"
                                fontSize="lg"
                                lineHeight="normal"
                                fontWeight="semibold"
                                href="#"
                            >
                                Finding customers for your new business
                            </Link>
                            <Text mt={2} color="gray.500">
                                Getting a new business off the ground is a lot
                                of hard work. Here are five ideas you can use to
                                find your first customers.
                            </Text>
                        </Box>
                    </Box>
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: 40 }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text
                                fontWeight="bold"
                                textTransform="uppercase"
                                fontSize="sm"
                                letterSpacing="wide"
                                color="teal.600"
                            >
                                Marketing
                            </Text>
                            <Link
                                mt={1}
                                display="block"
                                fontSize="lg"
                                lineHeight="normal"
                                fontWeight="semibold"
                                href="#"
                            >
                                Finding customers for your new business
                            </Link>
                            <Text mt={2} color="gray.500">
                                Getting a new business off the ground is a lot
                                of hard work. Here are five ideas you can use to
                                find your first customers.
                            </Text>
                        </Box>
                    </Box>
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: 40 }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text
                                fontWeight="bold"
                                textTransform="uppercase"
                                fontSize="sm"
                                letterSpacing="wide"
                                color="teal.600"
                            >
                                Marketing
                            </Text>
                            <Link
                                mt={1}
                                display="block"
                                fontSize="lg"
                                lineHeight="normal"
                                fontWeight="semibold"
                                href="#"
                            >
                                Finding customers for your new business
                            </Link>
                            <Text mt={2} color="gray.500">
                                Getting a new business off the ground is a lot
                                of hard work. Here are five ideas you can use to
                                find your first customers.
                            </Text>
                        </Box>
                    </Box>
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: 40 }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text
                                fontWeight="bold"
                                textTransform="uppercase"
                                fontSize="sm"
                                letterSpacing="wide"
                                color="teal.600"
                            >
                                Marketing
                            </Text>
                            <Link
                                mt={1}
                                display="block"
                                fontSize="lg"
                                lineHeight="normal"
                                fontWeight="semibold"
                                href="#"
                            >
                                Finding customers for your new business
                            </Link>
                            <Text mt={2} color="gray.500">
                                Getting a new business off the ground is a lot
                                of hard work. Here are five ideas you can use to
                                find your first customers.
                            </Text>
                        </Box>
                    </Box>
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: 40 }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontSize="md"
                                    letterSpacing="wide"
                                    color="teal.600"
                                >
                                    Marketing
                                </Text>
                                <BlogTags
                                    tags={['Canada', 'Toronto', 'Co-working']}
                                />
                            </HStack>
                            <Link
                                mt={1}
                                display="block"
                                fontSize="lg"
                                lineHeight="normal"
                                fontWeight="semibold"
                                href="#"
                            >
                                Finding a decent place to work for your new
                                business in Toronto.
                            </Link>
                            <Text mt={2} color="gray.500">
                                Getting a new business off the ground is a lot
                                of hard work. Here are five ideas you can use to
                                find your first customers.
                            </Text>
                        </Box>
                    </Box>
                </VStack>
                <Dock />
            </Flex>
        </Container>
    )
}

export default Forum
