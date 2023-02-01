import {
    Box,
    Flex,
    FormControl,
    HStack,
    Icon,
    Image,
    Input,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { fetchJson } from '../../api/utils'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { useNavigate } from 'react-router'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { MdSearch } from 'react-icons/md'
import styles from './Attraction.module.css'

const { REACT_APP_API_SERVER } = process.env

export interface AttractionPost {
    id: number
    name: string
    description: string
    image?: string
    imageLink?: string
    address: string
    open_time: string
    city_list: string
}

function Attraction() {
    const windowWidth = window.innerWidth
    const [postList, setPostList] = useState<Array<AttractionPost>>([])
    const [searchPostList, setSearchPostList] = useState<Array<AttractionPost>>(
        []
    )
    const [searchPost, setSearchPost] = useState('')
    const bg = useColorModeValue('#1d1d42', '#B0D8BC')

    const navigate = useNavigate()

    const handleChange_searchPost = (event: any) =>
        setSearchPost(event.target.value)
    const searchRef = useRef(searchPost)

    useEffect(() => {
        fetchJson<Array<AttractionPost>>(
            `${REACT_APP_API_SERVER}/data/attraction`
        ).then((data) => {
            setPostList(
                data.map((item) => ({
                    ...item,
                }))
            )
            setSearchPostList(
                data.map((item) => ({
                    ...item,
                }))
            )
        })
    }, [])

    useEffect(() => {
        if (searchPost !== searchRef.current) {
            console.log('searched')
            const result = searchPostList!.filter(
                (item) =>
                    item.name.match(searchPost) ||
                    item.description.match(searchPost)
            )

            setPostList(result)
        }
    }, [searchPost])

    postList.forEach((post: AttractionPost) => {
        const imageLink = post.image?.replace('url(', '')
        let lastIndex = imageLink?.lastIndexOf('"')
        let newLink = imageLink?.substring(0, lastIndex).substring(1)
        post.image = newLink
    })

    function goBack() {
        navigate('/home')
    }

    return (
        <>
            <div>
                <Nav />
                <div className={styles.tab}>
                    <button className={styles.backwardBtn} onClick={goBack}>
                        <Icon as={ChevronLeftIcon} w={12} h={12} color={bg} />
                    </button>
                    <div className={styles.titleBox}>
                        <Text as="h1" className={styles.headTitle} color={bg}>
                            Attraction
                        </Text>
                    </div>
                </div>
                <hr className={styles.line} />
                <VStack justifyContent={'center'}>
                    <Box
                        className="searchUser"
                        w="100%"
                        maxW={'xl'}
                        m={5}
                        px="1rem"
                        bg="gray.200"
                        rounded={'15px'}
                        boxShadow={'lg'}
                        ml={'30%'}
                        mr={'30%'}
                    >
                        <HStack>
                            <FormControl id="searchUser" width="100%">
                                <Input
                                    placeholder="Search attraction"
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                    border="0"
                                    type="text"
                                    onChange={handleChange_searchPost}
                                    value={searchPost}
                                    focusBorderColor={'none'}
                                />
                            </FormControl>
                            <Icon as={MdSearch} h="7%" w="7%" />
                        </HStack>
                    </Box>
                    <VStack
                        w={{ base: '90vw', lg: '85vw', xl: '75vw' }}
                        spacing="2"
                        alignItems="flex-start"
                    >
                        <Box className={styles.postContainer} p={3} w={'100%'}>
                            {postList.map((post, idx) => (
                                <Box
                                    py={'1rem'}
                                    display={{ md: 'flex' }}
                                    key={post.id}
                                    marginBottom={'1rem'}
                                >
                                    <Box flexShrink={0}>
                                        <div>
                                            <Image
                                                borderRadius="lg"
                                                w={{
                                                    md: '50rem',
                                                    lg: '50rem',
                                                }}
                                                src={post.image}
                                            />
                                        </div>
                                    </Box>
                                    <Box
                                        mt={{ base: 4, md: 0 }}
                                        ml={{ md: 6 }}
                                        w={'100%'}
                                    >
                                        <HStack>
                                            <Text
                                                fontWeight="bold"
                                                textTransform="uppercase"
                                                fontSize="lg"
                                                letterSpacing="wide"
                                                color="teal.600"
                                            >
                                                {post.name}
                                            </Text>
                                        </HStack>
                                        <Text
                                            className={styles.cityList}
                                            fontWeight="medium"
                                            fontSize="lg"
                                            color="#2d4b6fca"
                                        >
                                            {post.city_list}
                                        </Text>
                                        <Box className={styles.infoBox}>
                                            <Text className={styles.content}>
                                                {post.description}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </VStack>
                </VStack>
                {windowWidth > 850 ? <></> : <Dock />}
            </div>
        </>
    )
}

export default Attraction
