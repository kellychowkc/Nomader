import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchJson } from '../../api/utils'
import { AuthState } from '../../redux/state'
import { RootThunkDispatch } from '../../redux/store'
import { getUserInterest } from '../../redux/userInfo/userInfoThunk'

const { REACT_APP_API_SERVER } = process.env

function MatchingIndex() {
    const [matchingPage, setmatchingPage] = useState(false)
    const dispatch = useDispatch<RootThunkDispatch>()
    const navigate = useNavigate()
    const auth: AuthState = useSelector((state: any) => state.auth)

    const insertData = useEffect(() => {
        // fetchJson(`${REACT_APP_API_SERVER}/user/interest`).then((data) => {
        //     console.log(data)
        // setmatchingPage(data)
        const res = dispatch(getUserInterest(auth.id as any as number)).then(
            (data) => {
                console.log('check', data)
            }
        )
    }, [])

    return <></>
}

export default MatchingIndex
