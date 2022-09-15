import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RootState } from '../../redux/store'

function RequireAuth() {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    )
    const location = useLocation()

    if (isAuthenticated === null) {
        return null
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return <Outlet />
}

export default RequireAuth
