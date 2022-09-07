import styles from './Welcome.module.css'
import { Button } from '@chakra-ui/react'

function Welcome() {
    return (
        <div className={styles.body}>
            <div className={styles.welcomeBox}>
                <div className={styles.hexagon}>
                    <h2 className={styles.header}>Welcome</h2>
                        <Button as="a" href="/Login" className={styles.button}>Sign In </Button>
                        <Button as="a" href="/Login" className={styles.button}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
