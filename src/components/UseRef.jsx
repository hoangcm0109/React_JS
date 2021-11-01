import React from 'react'
import { useState, useRef, useEffect } from 'react'

export default function UseRef() {
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const prevCount = useRef()

    const h1Element = useRef()
    
    console.log(timerId);

    useEffect(() => {
        console.log(h1Element.current);
    }, [])

    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart = () => {
        if (timerId) {
            timerId.current = setInterval(() => {
                setCount(prevCount => prevCount - 1)       
            }, 1000) 
        }
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    return (
        <div>
            <h1 ref={h1Element}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
