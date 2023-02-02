import { BlockList } from 'net'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkMatch } from '../../api/friend'
import { AuthState } from '../../redux/state'
import { RootThunkDispatch } from '../../redux/store'
import { getUserInterest } from '../../redux/userInfo/userInfoThunk'

function MatchingIndex() {
    const dispatch = useDispatch<RootThunkDispatch>()
    const navigate = useNavigate()
    const auth: AuthState = useSelector((state: any) => state.auth)

    async function checkMatching() {
        let check = true
        await checkMatch(auth.id as any as number).then((data: any) => {
            if (data.result >= 5) {
                check = false
                return
            } else {
                return
            }
        })
        await dispatch(getUserInterest(auth.id as any as number)).then(
            (data) => {
                if (data.success && check) {
                    navigate('/matching')
                }
                if (!check) {
                    navigate('/matchingBlock')
                }
                // navigate('/interest')
                console.log('fail')
            }
        )
    }
    useEffect(() => {
        try {
            checkMatching()
        } catch (err) {
            window.location.reload()
        }
    }, [])

    return <></>
}

export default MatchingIndex
