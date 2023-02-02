import styles from './Forum.module.css'
import { Box, Image, HStack, Text, Avatar } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { fetchJson } from '../../api/utils'
import { Post } from './Forum'
import { AuthState } from '../../redux/state'
import { useSelector } from 'react-redux'
import { addBrowseCount } from '../../api/user'
import { title } from 'process'

const { REACT_APP_API_SERVER } = process.env

function HotPostList() {
    const [postList, setPostList] = useState<Array<Post>>([])
    const auth: AuthState = useSelector((state: any) => state.auth)
    const windowWidth = window.innerWidth

    useEffect(() => {
        fetchJson<Array<Post>>(`${REACT_APP_API_SERVER}/data/hot_post`).then(
            (data) => {
                console.log('check2', data)
                setPostList(
                    data.map((item) => ({
                        ...item,
                    }))
                )
            }
        )
    }, [])

    function setImage() {
        postList.forEach((post: Post) => {
            if (post.id) {
                if (post.id % 3 == 0) {
                    post.image = `../../assets/successBackgroundMobile.jpg`
                }
                if (post.id % 2 == 0) {
                    post.image = `../../assets/safetyBackground.jpg`
                } else {
                    post.image = `../../assets/matchingBackground.jpg`
                }
            } else {
                post.image = `../../assets/matchingBackground.jpg`
            }
            // const fileName = post.image
            // let path = `${REACT_APP_API_SERVER}/post/` + fileName
            // post.image = path
            const time = post.created_at!.slice(0, 10)
            post.created_at = time
            console.log(post.created_at)
            const profileFileName = post.profile
            let profilePath =
                `${REACT_APP_API_SERVER}/profile/` + profileFileName
            post.profile = profilePath
            const id = post.id
        })
    }

    setImage()
    function browseCount(post_id: number) {
        const user_id = auth.id
        addBrowseCount(post_id, user_id as any as number)
    }

    return (
        <div className={styles.forumBody}>
            {postList.map((post) => (
                <Box p={2} display={{ md: 'flex' }} key={post.id}>
                    <Box flexShrink={0}>
                        {(post.id as any as number) % 2 == 0 ? (
                            <img
                                src={require(`../../assets/matchingBackground.jpg`)}
                                alt="interest"
                                className={styles.latestPostImage}
                            ></img>
                        ) : (
                            <img
                                src={require(`../../assets/successBackgroundMobile.jpg`)}
                                alt="interest"
                                className={styles.latestPostImage}
                            ></img>
                        )}
                    </Box>
                    <Box
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        className={styles.postBox}
                    >
                        <HStack>
                            <Text className={styles.title} color="teal.600">
                                {post.title}
                            </Text>
                        </HStack>
                        <Box className={styles.infoBox}>
                            <div className={styles.usernameBox}>
                                <Avatar
                                    name={post.username}
                                    src={post.profile}
                                    className={styles.profile}
                                />
                                <p>{post.username}</p>
                            </div>
                            <div className={styles.dateBox}>
                                {post.created_at}
                            </div>
                        </Box>
                        {windowWidth > 850 ? (
                            <Box className={styles.contentBox}>
                                <Text className={styles.content}>
                                    {post.content}
                                </Text>
                            </Box>
                        ) : (
                            <details>
                                <summary
                                    onClick={() =>
                                        browseCount(post.id as any as number)
                                    }
                                >
                                    Read more
                                </summary>
                                <Box className={styles.contentBox}>
                                    <Text className={styles.content}>
                                        {post.content}
                                    </Text>
                                </Box>
                            </details>
                        )}
                    </Box>
                </Box>
            ))}
        </div>
    )
}

export default HotPostList
