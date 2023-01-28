import React from 'react'
import ReactLoading from 'react-loading'
import './theme.css'

function Loading() {
    return (
        <div className="loadingContainer">
            <ReactLoading
                type={'spin'}
                color={'#0DAD8D'}
                height={'50%'}
                width={'50%'}
            />
        </div>
    )
}

export default Loading
