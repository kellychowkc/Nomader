import { useEffect } from 'react'
import { useNavigate } from 'react-router'

function Exchange() {
    const navigate = useNavigate()
    useEffect(() => {
        window.open('https://www.xe.com/', '_blank', 'noopener,noreferrer')
        navigate('/home')
    })
    return <div></div>
}

export default Exchange
