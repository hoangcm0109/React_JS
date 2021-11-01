import React from 'react'
import { useState, useEffect } from 'react'

function Timer() {

    const [count, setCount] = useState(180)

    useEffect(() => {
        const handleTimer = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(handleTimer)
        }
    })


    return (
        <div>
            <h1>{count}</h1>

            <button
                onClick={() => {
                   return clearInterval()
                }}
            >Click me</button>
        </div>
    )
}

export default Timer
