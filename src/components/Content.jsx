import React from 'react'
import { useState, useEffect } from 'react'

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

export default function Content() {

    const [ posts, setPost ] = useState([])
    const [ type, setType ] = useState('posts')
    const [ showBtn, setShowBtn ] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(json => setPost(json))
    }, [type])

    useEffect(() => {
        const handleBtn = () => {
            setShowBtn(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleBtn)

        return () => {
            window.removeEventListener('scroll', handleBtn)
        }
    }, [])

    return (
        <div>
            {tabs.map(tab => (
                <button
                    className={type === tab ? "active" : ''}
                    key={tab}
                    onClick={() => setType(tab)}
                >
                    {`Click ${tab}`}
                </button>
            ))}
            <h1>F8 thật tuyệt vời</h1>
            <ul>
                {posts.map(post => (
                    <li
                        key={post.id}
                    >
                        {post.title || post.name}
                    </li>
                ))}
            </ul>

            {showBtn && 
            <button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20
                }}
                onClick={() => {
                    console.log('alo')
                    // return window.scrollY = 0
                }}
                    
            >Click on top</button>}
        </div>
    )
}
