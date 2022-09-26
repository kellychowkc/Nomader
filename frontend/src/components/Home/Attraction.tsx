import { Box, HStack, Image, Text } from '@chakra-ui/react'
import styles from '../layoutForum/Forum.module.css'
import React, { useEffect, useState } from 'react'
import { fetchJson } from '../../api/utils'

const { REACT_APP_API_SERVER } = process.env

export interface AttractionPost {
    id: number
    name: string
    description: string
    image?: string
    address: string
    open_time: string
    city_list: string
}

function Attraction() {
    const [postList, setPostList] = useState<Array<AttractionPost>>([])

    useEffect(() => {
        fetchJson<Array<AttractionPost>>(
            `${REACT_APP_API_SERVER}/data/attraction`
        ).then((data) => {
            setPostList(
                data.map((item) => ({
                    ...item,
                }))
            )
        })
    }, [])

    postList.forEach((post: AttractionPost) => {
        const fileName = post.image
        let path = `${REACT_APP_API_SERVER}/post/` + fileName
        post.image = path
        const imageFileName = post.image
        let imagePath = `${REACT_APP_API_SERVER}/attraction/` + imageFileName
        post.image = imagePath
    })

    return (
        <>
            {postList.map((post) => (
                <Box p={2} display={{ md: 'flex' }} key={post.id}>
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
                        <Box className={styles.infoBox}>
                            <Text className={styles.content}>
                                {post.description}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            ))}
        </>
    )
}

export default Attraction
