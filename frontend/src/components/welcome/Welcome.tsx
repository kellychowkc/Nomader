import styles from './Welcome.module.css'
import { Button, Flex } from '@chakra-ui/react'

function Welcome() {
    return (
        <Flex
            w="full"
            h="full"
            direction="column"
            justify="center"
            align="center"
            backgroundImage="temp/welcomeBackground.jpg"
        >
            <div className={styles.welcomeBox}>
                <div className={styles.hexagon}>
                    <h2 className={styles.header}>Welcome</h2>
                    <Button as="a" href="/Login" className={styles.button}>
                        Sign In{' '}
                    </Button>
                    <Button as="a" href="/Login" className={styles.button}>
                        Sign Up
                    </Button>
                </div>
            </div>
        </Flex>
    )
}

export default Welcome
