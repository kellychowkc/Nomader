import styles from './Interest.module.css'
import { Wrap, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import InterestItem from './interestItem'
import { fetchJson } from '../../api/utils'
import Swal from 'sweetalert2'
import { addUserInterest } from '../../api/user'

const { REACT_APP_API_SERVER } = process.env
export interface InterestItem {
    id: number
    title: string
    isSelected?: boolean
}

function InterestList() {
    const [interestList, setInterestList] = useState<Array<InterestItem>>([])

    useEffect(() => {
        fetchJson<Array<{ id: number; title: string }>>(
            `${REACT_APP_API_SERVER}/data/interest`
        ).then((data) => {
            setInterestList(
                data.map((item: Omit<InterestItem, 'isSelected'>) => ({
                    ...item,
                    isSelected: false,
                }))
            )
        })
    }, [])

    function toggle(id: number) {
        const clonedInterestList = interestList.slice()
        const interest = clonedInterestList.find((item) => item.id === id)!
        interest.isSelected = !interest.isSelected
        setInterestList(clonedInterestList)
    }

    function submit() {
        const filteredInterestList = interestList.filter(
            (item) => item.isSelected === true
        )

        if (filteredInterestList.length > 6) {
            Swal.fire({
                title: "Don't be greedy!",
                text: 'You can only pick 6.',
                icon: 'warning',
            })
            return
        }
        const submitInterestList = filteredInterestList.map(
            (item: InterestItem) => {
                delete item.isSelected
                return item
            }
        )
        addUserInterest(submitInterestList).then((data) => {
            console.log(data)
        })
    }
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
                            {interestList.map((item) => (
                                <InterestItem
                                    key={item.id}
                                    {...item}
                                    toggle={() => toggle(item.id)}
                                />
                            ))}
                        </Wrap>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.tickbtn} onClick={submit}>
                        <Icon as={CheckIcon} w={9} h={9} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InterestList
