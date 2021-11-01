import React from 'react'
import { useState, useEffect } from 'react'

const lessons = [
    {
        id: 1,
        name: 'Học lập trình tại F8'
    }, 
    {
        id: 2,
        name: 'Học javascript tại F8'
    },
    {
        id: 3,
        name: 'Học reactJS tại F8'
    }
]

export default function Chat() {

    const [item, setItem] = useState(1)

    const handleComment = ({ detail }) => {
        console.log(detail);
    }

    useEffect((id) => {
        window.addEventListener(`lesson-${item}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${item}`, handleComment)
        }
    }, [item])

    return (
        <div>
            {lessons.map(lesson => (
                <h3 key={lesson.id} 
                    style={{
                        color: item === lesson.id ? 'red' : 'black',
                        cursor: 'pointer'
                    }}
                    onClick={() => setItem(lesson.id)}
                >{lesson.name}</h3>
            ))}
        </div>
    )
}
