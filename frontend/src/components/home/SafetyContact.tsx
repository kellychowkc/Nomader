import { Box, Icon, Select } from '@chakra-ui/react'
import styles from './SafetyContact.module.css'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { fetchCountry, fetchRate } from '../../api/user'
import { useEffect, useState } from 'react'
import CountryList from '../auth/CountryList'
import SideMenu from '../common/sideMenu/SideMenu'

interface Emergency {
    emergency_tel: string
    police_tel: string
    ambulance_tel: string
    fire_tel: string
}

function SafetyContact() {
    const [selectedOption, setSelectedOption] = useState()
    const [list, setList] = useState<Emergency>()
    const windowWidth = window.innerWidth

    const navigate = useNavigate()

    function goBack() {
        navigate('/home')
    }

    useEffect(() => {
        fetchCountry(selectedOption as any as number).then((data: any) => {
            const dataList = data[0]
            setList(dataList)
        })
    })

    return (
        <div className={styles.body}>
            <Box className="bodyBox">
                {windowWidth > 850 ? <SideMenu /> : <></>}
                <div className={styles.container}>
                    <div className={styles.tab}>
                        <button className={styles.backwardBtn} onClick={goBack}>
                            <Icon as={ChevronLeftIcon} w={12} h={12} />
                        </button>
                        <div className={styles.titleBox}>
                            <h1 className={styles.bigTitle}>Emergency</h1>
                        </div>
                    </div>
                    <div className={styles.safetyContainer}>
                        <div className={styles.safetyBox}>
                            <Select
                                h={'4rem'}
                                w={'80%'}
                                fontSize={'20px'}
                                id="country"
                                name="country"
                                placeholder={'Country'}
                                className={styles.select}
                                value={selectedOption}
                                onChange={(e) =>
                                    setSelectedOption(e.target.value as any)
                                }
                            >
                                <CountryList />
                            </Select>
                            <h4 className={styles.subtitle}>Emergency</h4>
                            <Box className={styles.contact}>
                                {list?.emergency_tel}
                            </Box>
                            {/* <h4 className={styles.subtitle}>Police</h4>
                            <Box className={styles.contact}>
                                {list?.police_tel}
                            </Box>
                            <h4 className={styles.subtitle}>Ambulance</h4>
                            <Box className={styles.contact}>
                                {list?.ambulance_tel}
                            </Box>
                            <h4 className={styles.subtitle}>Fire station</h4>
                            <Box className={styles.contact}>
                                {list?.fire_tel}
                            </Box> */}
                        </div>
                    </div>
                </div>
            </Box>
            {windowWidth > 850 ? <></> : <Dock />}
        </div>
    )
}

export default SafetyContact
