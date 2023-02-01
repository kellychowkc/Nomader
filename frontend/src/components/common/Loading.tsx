import React from 'react'
import ReactLoading from 'react-loading'
import './theme.css'

function Loading() {
    return (
        <div className="loadingContainer">
            <ReactLoading
                type={'spin'}
                color={'#0DAD8D'}
                height={'80px'}
                width={'80px'}
            />
        </div>
    )
}

export default Loading
