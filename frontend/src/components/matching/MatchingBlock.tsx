import styles from './Interest.module.css'

import InterestItem from './InterestItem'

import { useNavigate } from 'react-router-dom'
import Dock from '../common/dock/Dock'

import Nav from '../common/navBar/NavBar'
import SideMenu from '../common/sideMenu/SideMenu'

export interface InterestItem {
    id: number
    title: string
    isSelected?: boolean
}

function MatchingBlock() {
    const windowWidth = window.innerWidth

    const navigate = useNavigate()

    return (
        <div>
            <Nav />

            <div className={styles.body}>
                {windowWidth > 850 && <SideMenu />}
                <div className={styles.pageContainer}>
                    <div className={styles.blockTitleContainer}>
                        {windowWidth < 850 ? (
                            <h6 className={styles.blockTitle}>
                                You have matched with <br /> so many people
                                today!
                            </h6>
                        ) : (
                            <h6 className={styles.blockTitle}>
                                You have matched with so many people today!
                            </h6>
                        )}

                        <h6 className={styles.blockTitle}>
                            Let's explore other function!
                        </h6>
                        <h6 className={styles.blockTitle}>(つ´ω`)つ</h6>
                    </div>
                </div>
            </div>
            {windowWidth > 850 ? <></> : <Dock />}
        </div>
    )
}

export default MatchingBlock
