import styles from './Interest.module.css'
import { Wrap, WrapItem, Center, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function InterestList() {
    function selectInterest() {}
    return (
        <div className={styles.body}>
            <div className={styles.pageContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Interests</h1>
                    <h3 className={styles.subtitle}>
                        Pick your top 6 interests
                    </h3>
                </div>
                <div className={styles.interestContainer}>
                    <div className={styles.interestBox}>
                        <Wrap>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="red.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Hiking
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem className={styles.interest}>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Camping
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Cycling
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Foodie
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Party
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Photo Shooting
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="red.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Reading
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem className={styles.interest}>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Singing
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Busking
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Diving
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Watch Concert
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Watch Match
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="red.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Join Event
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem className={styles.interest}>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Skiing
                                    </button>
                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center
                                    w="6rem"
                                    h="6rem"
                                    bg="green.200"
                                    margin={1}
                                >
                                    <button className={styles.btn}>
                                        Shopping
                                    </button>
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.tickbtn}>
                        <Icon as={CheckIcon} className={styles.tick} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InterestList
