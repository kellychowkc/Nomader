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
} from '@chakra-ui/react'
import styles from '../layoutForum/Forum.module.css'
import React, { useEffect, useState } from 'react'
import { fetchJson } from '../../api/utils'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { useNavigate } from 'react-router'
import { ChevronLeftIcon } from '@chakra-ui/icons'

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
    const [postList, setPostList] = useState<Array<AttractionPost>>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchJson<Array<AttractionPost>>(
            `${REACT_APP_API_SERVER}/data/attraction`
        ).then((data) => {
            setPostList(
                data.map((item) => ({
                    ...item,
                }))
            )
            console.log(data)
        })
    }, [])

    postList.forEach((post: AttractionPost) => {
        const imageLink = post.image?.replace('url(', '')
        let lastIndex = imageLink?.lastIndexOf('"')
        let newLink = imageLink?.substring(0, lastIndex).substring(1)
        post.image = newLink
    })

    console.log(postList)

    function goBack() {
        navigate('/home')
    }

    return (
        <>
            <Nav />
            <div className={styles.tab}>
                <button className={styles.backwardBtn} onClick={goBack}>
                    <Icon as={ChevronLeftIcon} w={12} h={12} />
                </button>
                <div className={styles.titleBox}>
                    <Text
                        as="h1"
                        className={styles.headTitle}
                        color={useColorModeValue('#1d1d42', '#B0D8BC')}
                    >
                        Attraction
                    </Text>
                </div>
            </div>
            <hr className={styles.line} />
            {/* <Flex
                className="Search"
                w="80vw"
                mb="10px"
                direction="column"
                justify="center"
                align="center"
            >
                <HStack
                    w="100%"
                    m="0"
                    spacing={{ base: 3, lg: 5 }}
                    justify="center"
                >
                    <Flex
                        className="serachBar"
                        w="85%"
                        maxW={'2xl'}
                        h="50px"
                        px="3"
                        py="1"
                        borderRadius="10px"
                        boxShadow="0px 0px 9px #BBBBBB"
                        bg={useColorModeValue('gray.100', 'gray.400')}
                        align={'center'}
                        justify={'center'}
                    >
                        <HStack w="100%" justify="space-between" p="3px">
                            <FormControl id="search" isRequired>
                                <Input
                                    placeholder="Search..."
                                    _placeholder={{
                                        color: 'gray.900',
                                    }}
                                    type="text"
                                    // value={search}
                                    // onChange={handleChange_search}
                                    border="0"
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    _focus={{
                                        outline: 'none',
                                        border: '0px',
                                    }}
                                />
                            </FormControl>
                            <Icon
                                as={MdSearch}
                                h={{ base: '30px', lg: '35px' }}
                                w={{ base: '30px', lg: '35px' }}
                                _hover={{ cursor: 'pointer' }}
                            />
                        </HStack>
                    </Flex>
                </HStack>
            </Flex> */}
            <Box className={styles.postContainer}>
                {postList.map((post) => (
                    <Box
                        p={3}
                        display={{ md: 'flex' }}
                        key={post.id}
                        marginBottom={1}
                    >
                        <Box flexShrink={0}>
                            <div>
                                <Image
                                    borderRadius="lg"
                                    w={{
                                        md: '150px',
                                        lg: '200px',
                                    }}
                                    src={post.image}
                                />
                            </div>
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
                                    {post.name}
                                </Text>
                            </HStack>
                            <Text className={styles.cityList}>
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
            <Dock />
        </>
    )
}

export default Attraction
