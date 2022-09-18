import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Center, Icon, Image, Wrap, WrapItem } from '@chakra-ui/react'
import styles from './Matching.module.css'

function Matching() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profilePictureContainer}>
                <Image
                    src="https://bit.ly/dan-abramov"
                    alt="profile pic"
                    className={styles.profilePic}
                />
            </div>
            <div className={styles.profileInfo}>
                <h1 className={styles.title}>Username</h1>
                <h2 className={styles.subtitle}> Country</h2>
                <h2 className={styles.subtitle}> Job</h2>
                <hr></hr>
                <h3 className={styles.bio}> Bio Caption</h3>
                <hr></hr>

                <h3 className={styles.subtitle}> Interests </h3>
                <div className={styles.interestBox}>
                    <Wrap spacingX={10}>
                        <WrapItem>
                            <Center w="80px" h="80px">
                                Box 1
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="80px" h="80px">
                                Box 2
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="80px" h="80px">
                                Box 3
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="80px" h="80px">
                                Box 4
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="80px" h="80px">
                                Box 5
                            </Center>
                        </WrapItem>
                    </Wrap>
                </div>
            </div>
            <Box className={styles.btnBox}>
                <button className={styles.crossbtn}>
                    <Icon as={CloseIcon} w={6} h={6} />
                </button>
                <button className={styles.tickbtn}>
                    <Icon as={CheckIcon} w={8} h={8} />
                </button>
            </Box>
        </div>
    )
}

export default Matching
