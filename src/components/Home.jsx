import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {

    const [ resize, setResize ] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setResize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    

    return (
        <div>
            <h1>{resize}</h1>
        </div>
    )
}

export default Home
