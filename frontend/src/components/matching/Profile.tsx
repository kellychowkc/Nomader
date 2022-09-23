import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchJson } from '../../api/utils'
import { AuthState } from '../../redux/state'

const { REACT_APP_API_SERVER } = process.env

interface Profile {
    id: number
    username: string
    country: string
    job: string
    information: string
    interest: string
}

function Profile() {
    const [profileList, setProfileList] = useState<Array<Profile>>([])
    const auth: AuthState = useSelector((state: any) => state.auth)

    const user_id = auth.id

    return <div>Profile</div>
}

export default Profile
