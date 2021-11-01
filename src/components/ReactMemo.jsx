import React from 'react'
import { memo } from 'react'

function ReactMemo({ onIncrease }) {
    return (
        <div>
            {console.log('Re-render')}
            <button
                onClick={onIncrease}
            >Click me</button>
            <h1>Hello anh em ReactJS F8</h1>
        </div>
    )
}

export default memo(ReactMemo)
