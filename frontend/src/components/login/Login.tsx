import styles from './Login.module.css'
import { Button } from '@chakra-ui/react'

function Login() {
    return (
        <div className={styles.body}>
            <div className={styles.hexagon}>
                <div className={styles.logo}>Logo</div>
            </div>
            <div className={styles.loginFormContainer}>
                <h1 className={styles.title}>Login</h1>
                <form>
                    <div className={styles.inputContainer}>
                        <label>Username </label>
                        <input type="text" name="username" required />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Password </label>
                        <input type="password" name="password" required />
                    </div>
                    <Button
                        type="submit"
                        value="Submit"
                        className={styles.button}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login
