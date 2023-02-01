import { Box, Icon, Select } from '@chakra-ui/react'
import styles from './Currency.module.css'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import CurrencyList from './CurrencyList'
import { fetchRate } from '../../api/user'
import { useEffect, useState } from 'react'
import SideMenu from '../common/sideMenu/SideMenu'

interface Currency {
    rate: number
    code: string
}

function Currency() {
    const [selectedOption, setSelectedOption] = useState()
    const [selectedOption2, setSelectedOption2] = useState()
    const [rate, setRate] = useState(1)
    const [currencyList, setCurrencyList] = useState<[Currency]>()
    const navigate = useNavigate()
    const windowWidth = window.innerWidth

    function goBack() {
        navigate('/home')
    }

    useEffect(() => {
        console.log(selectedOption)
        fetchRate(selectedOption as any as string).then((data) => {
            setCurrencyList(data as any)
        })

        console.log(currencyList)
        if (selectedOption) {
            console.log('check', selectedOption2)
            currencyList?.forEach((cur) => {
                if (cur.code === selectedOption2) {
                    setRate(cur.rate)
                }
            })
        }
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
                            <h1 className={styles.bigTitle}>Currency</h1>
                        </div>
                    </div>
                    <div className={styles.currencyContainer}>
                        <div className={styles.currencyBox}>
                            <Select
                                h={'4rem'}
                                w={'80%'}
                                fontSize={'20px'}
                                id="currency1"
                                name="currency1"
                                placeholder={'Currency'}
                                className={styles.select}
                                value={selectedOption}
                                onChange={(e) =>
                                    setSelectedOption(e.target.value as any)
                                }
                            >
                                <CurrencyList />
                            </Select>
                            <Box className={styles.rate}>1</Box>
                            <Select
                                h={'4rem'}
                                w={'80%'}
                                fontSize={'20px'}
                                id="currency2"
                                name="currency2"
                                placeholder={'Currency'}
                                className={styles.select}
                                value={selectedOption2}
                                onChange={(e) =>
                                    setSelectedOption2(e.target.value as any)
                                }
                            >
                                <CurrencyList />
                            </Select>
                            <Box className={styles.rate}>{rate}</Box>
                        </div>
                    </div>
                </div>
            </Box>
            {windowWidth > 850 ? <></> : <Dock />}
        </div>
    )
}

export default Currency
