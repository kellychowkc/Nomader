import { Box, Icon, Select } from '@chakra-ui/react'
import styles from './Currency.module.css'
import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import CountryList from '../auth/CountryList'

function Currency() {
    const navigate = useNavigate()

    function goBack() {
        navigate('/home')
    }
    return (
        <div>
            <Nav />
            <div className={styles.tab}>
                <button className={styles.backwardBtn} onClick={goBack}>
                    <Icon as={ChevronLeftIcon} w={12} h={12} />
                </button>
                <div className={styles.titleBox}>
                    <h1 className={styles.bigTitle}>Currency</h1>
                </div>
            </div>
            <Box
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
                <div>
                    <Select
                        id="currency1"
                        name="currency1"
                        placeholder={'Currency'}
                    >
                        <CountryList />
                    </Select>
                    <Select
                        id="currency2"
                        name="currency2"
                        placeholder={'Currency'}
                    >
                        <CountryList />
                    </Select>
                </div>
            </Box>
            <Dock />
        </div>
    )
}

export default Currency
