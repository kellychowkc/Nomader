import { BlockList } from 'net'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthState, UserInfoState } from '../../redux/state'
import { RootThunkDispatch } from '../../redux/store'
import { getUserInterest } from '../../redux/userInfo/userInfoThunk'

function MatchingIndex() {
    const dispatch = useDispatch<RootThunkDispatch>()
    const navigate = useNavigate()
    const auth: AuthState = useSelector((state: any) => state.auth)
    const match: UserInfoState = useSelector((state: any) => state.userInfo)

    const blockTime = match.matchTime
    const today = new Date()
    const currentTime = today.getHours() - 2

    const insertData = useEffect(() => {
        const res = dispatch(getUserInterest(auth.id as any as number)).then(
            (data) => {
                if (data.success) {
                    navigate('/matching')
                } else {
                    navigate('/interest')
                }
            }
        )
    }, [])

    return <></>
}

export default MatchingIndex
