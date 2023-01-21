import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RootState, RootThunkDispatch } from '../../redux/store'
import jwtDecode from 'jwt-decode'
import { loginSuccess } from '../../redux/auth/authAction'

type tokenType = {
    username: string
    id: number
    exp: number
}

function RequireAuth() {
    const dispatch = useDispatch<RootThunkDispatch>()
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    )
    const location = useLocation()
    const token = window.localStorage.getItem('auth_token')
    const now = Date.now() / 1000

    //check jwt expiry
    if (token) {
        let decoded: tokenType
        decoded = jwtDecode(token)
        if (decoded.exp < now) {
            localStorage.removeItem('auth_token')
            return <Navigate to="/login" state={{ from: location }} replace />
        }
    }

    // pull token decode info into redux
    if (token && !isAuthenticated) {
        let decoded: tokenType
        decoded = jwtDecode(token)
        dispatch(loginSuccess(decoded.username, decoded.id))
        return <Outlet />
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return <Outlet />
}

export default RequireAuth
