import React from 'react'
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Tag,
    SpaceProps,
    useColorModeValue,
    VStack,
    Flex,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
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

interface Post {
    title: string
    content: string
    category?: string
    tags?: Array<string>
    author?: string
    date?: string
    thumbnail?: any
}

const featurePosts: Post[] = [
    {
        title: 'Post #1',
        content:
            'Converting posting into object, with title, content, category, tag, author and dates....',
        category: 'Tecky',
        tags: ['project', 'news', 'digital nomad'],
        author: 'Danny',
        date: '2022-01-01',
        thumbnail: 'pic/logo.JPG',
    },
    {
        title: 'Post #2',
        content: 'Testing... cat is the best. LOL',
        category: 'Meme',
        tags: ['meme', 'digital nomad'],
        author: 'WTF',
        date: '2022-09-11',
        thumbnail: 'pic/cat.jpeg',
    },
]

const Forum = () => {
    return (
        <Box w="auto" h="full">
            {/* === NavBar === */}
            <Nav />
            <VStack w="auto">
                <Heading as="h1">Nomad Forum</Heading>
                <p></p>
                <VStack w="auto">
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
                        Featuring Posts
                    </Text>
                    {/* Post */}

                    {featurePosts.map((post) => (
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
                                    width={{
                                        base: '80%',
                                        sm: '85%',
                                        lg: '75%',
                                        xl: '65%',
                                    }}
                                    zIndex="2"
                                    marginLeft={{ base: '0', sm: '5%' }}
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
                                            src={post.thumbnail}
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
                                        // eslint-disable-next-line react-hooks/rules-of-hooks
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
                                p={10}
                            >
                                <HStack>
                                    <Text
                                        fontWeight="bold"
                                        textTransform="uppercase"
                                        fontSize="lg"
                                        letterSpacing="wide"
                                        color="teal.600"
                                    >
                                        {/*  === Category ===  */}
                                        {post.category}
                                    </Text>
                                    <BlogTags tags={post.tags!} />
                                </HStack>
                                <Heading marginTop="1">
                                    <Link
                                        textDecoration="none"
                                        _hover={{ textDecoration: 'none' }}
                                    >
                                        {/* === Title === */}
                                        {post.title}
                                    </Link>
                                </Heading>
                                <Text
                                    as="p"
                                    marginTop="2"
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    color={useColorModeValue(
                                        'gray.700',
                                        'gray.200'
                                    )}
                                    fontSize="lg"
                                >
                                    {post.content}
                                </Text>
                                <BlogAuthor
                                    name={post.author!}
                                    date={new Date('2022-09-06T19:01:27Z')}
                                />
                            </Box>
                        </Box>
                    ))}

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
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box
                                width={{
                                    base: '80%',
                                    sm: '85%',
                                    lg: '75%',
                                    xl: '65%',
                                }}
                                zIndex="2"
                                marginLeft={{ base: '0', sm: '5%' }}
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
                            p={10}
                        >
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontSize="lg"
                                    letterSpacing="wide"
                                    color="teal.600"
                                >
                                    News
                                </Text>
                                <BlogTags tags={['Hong Kong', 'Product']} />
                            </HStack>
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
                                color={useColorModeValue(
                                    'gray.700',
                                    'gray.200'
                                )}
                                fontSize="lg"
                            >
                                We are building a Nomader Web App written in
                                React and PWA ready. Bridging the portability of
                                Web App and stability and consistency of Native
                                App together.
                            </Text>
                            <BlogAuthor
                                name="Nomad#2 WTF"
                                date={new Date('2022-09-06T19:01:27Z')}
                            />
                        </Box>
                    </Box>
                    {/* Post */}
                </VStack>

                <VStack
                    w={{ base: '90vw', lg: '85vw', xl: '75vw' }}
                    paddingTop="20px"
                    spacing="2"
                    alignItems="flex-start"
                >
                    <Flex h="50px" w="100%" justify="center" align="center">
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
                            More Posts
                        </Text>
                    </Flex>
                    {/* sample post */}
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: '150px', lg: '200px' }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontSize="lg"
                                    letterSpacing="wide"
                                    color="teal.600"
                                >
                                    Entrepreneur
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
                    {/* sample post */}
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: '150px', lg: '200px' }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontSize="lg"
                                    letterSpacing="wide"
                                    color="teal.600"
                                >
                                    Entrepreneur
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
                    {/* sample post */}
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: '150px', lg: '200px' }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontSize="lg"
                                    letterSpacing="wide"
                                    color="teal.600"
                                >
                                    Entrepreneur
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
                    {/* sample post */}
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: '150px', lg: '200px' }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontSize="lg"
                                    letterSpacing="wide"
                                    color="teal.600"
                                >
                                    Entrepreneur
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
                    {/* sample post */}
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: '150px', lg: '200px' }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontSize="lg"
                                    letterSpacing="wide"
                                    color="teal.600"
                                >
                                    Entrepreneur
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
                    {/* sample post */}
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: '150px', lg: '200px' }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontSize="lg"
                                    letterSpacing="wide"
                                    color="teal.600"
                                >
                                    Entrepreneur
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
                    {/* sample post */}
                    <Box p={4} display={{ md: 'flex' }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ md: '150px', lg: '200px' }}
                                src="https://bit.ly/2jYM25F"
                                alt="Woman paying for a purchase"
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontSize="lg"
                                    letterSpacing="wide"
                                    color="teal.600"
                                >
                                    Entrepreneur
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
            </VStack>
            <Dock />
        </Box>
    )
}

export default Forum
