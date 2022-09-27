import { Box, Icon, Select } from '@chakra-ui/react'
import styles from './SafetyContact.module.css'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { fetchCountry, fetchRate } from '../../api/user'
import { useEffect, useState } from 'react'
import CountryList from '../auth/CountryList'

interface Emergency {
    emergency: string
    police: string
    ambulance: string
    fire: string
}

function SafetyContact() {
    const [selectedOption, setSelectedOption] = useState()
    const [list, setList] = useState<Emergency>()
    const navigate = useNavigate()

    function goBack() {
        navigate('/home')
    }

    useEffect(() => {
        console.log(selectedOption)
        fetchCountry(selectedOption as any as number).then((data) => {
            console.log('check', data)
            setList(data as any)
        })
    })

    return (
        <div className={styles.body}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.tab}>
                    <button className={styles.backwardBtn} onClick={goBack}>
                        <Icon as={ChevronLeftIcon} w={12} h={12} />
                    </button>
                    <div className={styles.titleBox}>
                        <h1 className={styles.bigTitle}>Emergency</h1>
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
                        <Select
                            h={'4rem'}
                            w={'15rem'}
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
                        <Box className={styles.rate}>{list?.emergency}</Box>
                        <h4 className={styles.subtitle}>Police</h4>
                        <Box className={styles.rate}>{list?.police}</Box>
                        <h4 className={styles.subtitle}>Ambulance</h4>
                        <Box className={styles.rate}>{list?.ambulance}</Box>
                        <h4 className={styles.subtitle}>Fire station</h4>
                        <Box className={styles.rate}>{list?.fire}</Box>
                    </div>
                </Box>
            </div>
            <Dock />
        </div>
    )
}

export default SafetyContact
