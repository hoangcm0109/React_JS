import React from 'react'
import { useState, useCallback } from 'react'
import ReactMemo from './ReactMemo';

export default function Clickbutton() {

    const [count, setCount] = useState(1)

    const handleCount = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    return (
        <div>
            <h1>{count}</h1>

            <ReactMemo onIncrease= {handleCount} />
        </div>
    )
}
