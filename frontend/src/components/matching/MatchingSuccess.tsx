import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Box, Button, Icon, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Dock from '../common/dock/Dock'
import styles from './Matching.module.css'

function MatchingSuccess() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.tab}>
                    <button className={styles.backwardBtn}>
                        <Link to="/matching">
                            <Icon as={ChevronLeftIcon} w={12} h={12} />
                        </Link>
                    </button>
                    <div className={styles.titleBox}>
                        <h1 className={styles.bigTitle}>Match!</h1>
                    </div>
                </div>
                <Box
                    maxW="sm"
                    borderWidth="3px"
                    borderRadius="xl"
                    overflow="hidden"
                    margin={10}
                    padding={10}
                    display="flex"
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Avatar
                        className={styles.avatar}
                        size="xl"
                        src="https://avatars.dicebear.com/api/male/username.svg"
                    ></Avatar>
                    <div className={styles.flexContainer}>
                        <h1 className={styles.caption}>
                            Enjoy <br></br>your journey!
                        </h1>
                    </div>
                    <Avatar
                        className={styles.avatar}
                        size="xl"
                        src="https://avatars.dicebear.com/api/male/username.svg"
                    ></Avatar>
                    <Button
                        bgImage={
                            'linear-gradient(to right,#67d6f8, #67d6f8, #bae4c7)'
                        }
                        className={styles.btn}
                        type="submit"
                    >
                        Chat Now
                    </Button>
                </Box>
            </div>
            <Dock />
        </div>
    )
}

export default MatchingSuccess
