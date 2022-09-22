import React from 'react'
import styles from './Forum.module.css'
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
    Icon,
    Button,
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { AddIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import PostList from './LastestPostList'
import HotPostList from './HotPost'

const { REACT_APP_API_SERVER } = process.env

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

export interface Post {
    id?: number
    title: string
    content: string
    category?: string
    username?: string
    created_at?: string
    profile?: string
    image?: string
}

const featurePosts: Post[] = [
    {
        title: 'Post #1',
        content:
            'Converting posting into object, with title, content, category, tag, author and dates....',
        category: 'Tecky',
        username: 'Danny',
        created_at: '2022-01-01',
        profile: 'pic/logo.JPG',
    },
    {
        title: 'Post #2',
        content: 'Testing... cat is the best. LOL',
        category: 'Meme',
        username: 'Danny',
        created_at: '2022-01-01',
        profile: 'pic/logo.JPG',
    },
]

const Forum = () => {
    const navigate = useNavigate()

    //fetch data

    return (
        <Box w="auto" h="full">
            {/* === NavBar === */}
            <Nav />
            <VStack w="auto" margin={6}>
                <div className={styles.head}>
                    <h1 className={styles.headTitle}>Nomad Forum</h1>
                    <Box className={styles.btnBox}>
                        <Button
                            className={styles.addbtn}
                            bgImage={
                                'linear-gradient(to right,#569ee6, #67d6f8, #b0d8bc)'
                            }
                            onClick={() => {
                                navigate('/newPost')
                            }}
                        >
                            <Icon as={AddIcon} w={6} h={6} />
                        </Button>
                    </Box>
                </div>
                <VStack w="auto">
                    <Tabs isFitted>
                        <TabList>
                            <Tab>Hot</Tab>
                            <Tab>Latest</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <VStack
                                    w={{ base: '90vw', lg: '85vw', xl: '75vw' }}
                                    paddingTop="20px"
                                    spacing="2"
                                    alignItems="flex-start"
                                >
                                    <HotPostList />
                                </VStack>
                            </TabPanel>
                            <TabPanel>
                                <VStack
                                    w={{ base: '90vw', lg: '85vw', xl: '75vw' }}
                                    paddingTop="20px"
                                    spacing="2"
                                    alignItems="flex-start"
                                >
                                    <PostList />
                                </VStack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
            </VStack>
            <Dock />
        </Box>
    )
}

export default Forum
