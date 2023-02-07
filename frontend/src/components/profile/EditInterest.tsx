import styles from '../matching/Interest.module.css'
import { Wrap, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { fetchJson } from '../../api/utils'
import Swal from 'sweetalert2'
import { editUserInterest } from '../../api/user'
import { useNavigate } from 'react-router-dom'
import Dock from '../common/dock/Dock'
import { AuthState } from '../../redux/state'
import { useSelector } from 'react-redux'
import InterestItem from '../matching/InterestItem'
import Nav from '../common/navBar/NavBar'
import SideMenu from '../common/sideMenu/SideMenu'

const { REACT_APP_API_SERVER } = process.env
export interface InterestItem {
    id: number
    title: string
    isSelected?: boolean
}

function EditInterest() {
    const [interestList, setInterestList] = useState<Array<InterestItem>>([])
    const auth: AuthState = useSelector((state: any) => state.auth)
    const user_id = auth.id
    const windowWidth = window.innerWidth

    const navigate = useNavigate()
    const insertData = useEffect(() => {
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
        console.log(clonedInterestList)
        setInterestList(clonedInterestList)
    }

    function submit() {
        const filteredInterestList = interestList.filter(
            (item) => item.isSelected === true
        )
        console.log('check length', filteredInterestList.length)
        if (filteredInterestList.length === 0) {
            Swal.fire({
                title: 'Sorry',
                text: 'You have to pick at least one.',
                icon: 'warning',
            })

            return
        } else if (filteredInterestList.length > 6) {
            Swal.fire({
                title: "Don't be greedy!",
                text: 'You can only pick six.',
                icon: 'warning',
            })

            return
        } else {
            const submitInterestList = filteredInterestList.map(
                (item: InterestItem) => {
                    delete item.isSelected
                    return item
                }
            )
            editUserInterest(submitInterestList, user_id as any as number).then(
                (data) => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your interests are updated!',
                        icon: 'success',
                    })
                    navigate('/profile')
                }
            )
        }
    }
    return (
        <div>
            <Nav />
            <div className={styles.body}>
                {windowWidth > 850 && <SideMenu />}
                <div className={styles.pageContainer}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Edit Interests</h1>
                        <h3 className={styles.subtitle}>
                            Pick your interests again!
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
            {windowWidth > 850 ? <></> : <Dock />}
        </div>
    )
}

export default EditInterest
