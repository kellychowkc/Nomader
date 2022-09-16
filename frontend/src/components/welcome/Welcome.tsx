import styles from './Welcome.module.css'
import { Button, Flex } from '@chakra-ui/react'
import Dock from '../common/dock/Dock'

function Welcome() {
    return (
        <Flex
            w="full"
            h="100vh"
            direction="column"
            justify="center"
            align="center"
            backgroundImage="temp/welcomeBackground.jpg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <div className={styles.welcomeBox}>
                <div className={styles.hexagon}>
                    <h2 className={styles.header}>Welcome</h2>
                    <Button
                        as="a"
                        href="/login"
                        className={styles.button}
                        backgroundColor="#FFFFFF50"
                    >
                        Sign In{' '}
                    </Button>
                    <Button
                        as="a"
                        href="/signup"
                        className={styles.button}
                        backgroundColor="#FFFFFF50"
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
            <Dock />
        </Flex>
    )
}

export default Welcome
