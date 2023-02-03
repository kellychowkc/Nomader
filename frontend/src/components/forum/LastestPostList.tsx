import styles from './Forum.module.css'
import { Box, Image, HStack, Text, Avatar } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { fetchJson } from '../../api/utils'
import { Post } from './Forum'
import { AuthState } from '../../redux/state'
import { useSelector } from 'react-redux'
import { addBrowseCount } from '../../api/user'
import Loading from '../common/Loading'

const { REACT_APP_API_SERVER } = process.env

function PostList() {
    const [postList, setPostList] = useState<Array<Post>>([])
    const auth: AuthState = useSelector((state: any) => state.auth)
    const windowWidth = window.innerWidth

    useEffect(() => {
        fetchJson<Array<Post>>(`${REACT_APP_API_SERVER}/data/post`).then(
            (data) => {
                setPostList(
                    data.map((item) => ({
                        ...item,
                    }))
                )
            }
        )
    }, [])

    postList.forEach((post: Post) => {
        const time = post.created_at!.slice(0, 10)
        post.created_at = time
        const fileName = post.image
        let path = `${REACT_APP_API_SERVER}/post/` + fileName
        post.image = path
        const profileFileName = post.profile
        let profilePath = `${REACT_APP_API_SERVER}/profile/` + profileFileName
        post.profile = profilePath
    })

    let loading
    if (!postList) {
        loading = <Loading />
    }

    function browseCount(post_id: number) {
        const user_id = auth.id
        addBrowseCount(post_id, user_id as any as number)
    }

    return (
        <div className={styles.forumBody}>
            {loading}
            {postList.map((post) => (
                <Box p={2} key={post.id} className={styles.postBigBox}>
                    <Box flexShrink={0} className={styles.imageBox}>
                        <img
                            src={post.image}
                            alt="interest"
                            className={styles.latestPostImage}
                        ></img>
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

export default PostList
