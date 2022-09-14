import styles from './Interest.module.css'
import { WrapItem, Center } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

type Props = {
    item: string
    onClick: () => void
    onRemove: () => void
}

function interestItem(props: Props) {
    const todoList = useSelector((state) => state)

    function selectItem() {}
    function unselectItem() {}

    return (
        <WrapItem>
            <Center w="6rem" h="6rem" bg="red.200" margin={1}>
                <button className={styles.btn}>Hiking</button>
            </Center>
        </WrapItem>
    )
}

export default interestItem
