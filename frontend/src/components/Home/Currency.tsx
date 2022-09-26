import { Box, Icon, Select } from '@chakra-ui/react'
import styles from './Currency.module.css'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import CurrencyList from './CurrencyList'
import { fetchRate } from '../../api/user'
import { Value } from 'sass'
import { useState } from 'react'

function Currency() {
    const [selectedOption, setSelectedOption] = useState()
    const navigate = useNavigate()

    function goBack() {
        navigate('/home')
    }

    function selected(code: string) {
        fetchRate(code).then((data) => {
            console.log(data)
        })
    }
    return (
        <div className={styles.body}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.tab}>
                    <button className={styles.backwardBtn} onClick={goBack}>
                        <Icon as={ChevronLeftIcon} w={12} h={12} />
                    </button>
                    <div className={styles.titleBox}>
                        <h1 className={styles.bigTitle}>Currency</h1>
                    </div>
                </div>
                <Box
                    maxW="sm"
                    borderWidth="3px"
                    borderRadius="xl"
                    overflow="hidden"
                    margin={10}
                    padding={10}
                    display="flex"
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    className={styles.box}
                >
                    <div className={styles.currencyBox}>
                        <select
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
                        </select>
                        <Box className={styles.rate}>1</Box>
                        <Select
                            id="currency2"
                            name="currency2"
                            placeholder={'Currency'}
                            className={styles.select}
                        >
                            <CurrencyList />
                        </Select>
                        <Box className={styles.rate}></Box>
                    </div>
                </Box>
            </div>
            <Dock />
        </div>
    )
}

export default Currency
