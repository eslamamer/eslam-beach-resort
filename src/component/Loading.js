import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'
export default function Loading() {
    return ( 
        <div className="loading">
            <h1>Loading...</h1>
            <img src={loadingGif} alt="loding"/>
        </div>
    )
}