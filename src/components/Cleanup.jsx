import React from 'react'
import { useState, useEffect } from 'react'

export default function Cleanup() {
    const [avt, setAvt] = useState()
    
    const handleAvatar = (e) => {
        const files = e.target.files


        const arrFile = Array.from(files).map(file => {
           return file = URL.createObjectURL(file)
        })
        setAvt(arrFile)
        console.log(files);
        e.target.value = null
    }

    useEffect(() => {
 
        return () => {
            avt && 
                avt.map((img) => {
                    return URL.revokeObjectURL(img)
                })
        }
    }, [avt])

    return (
        <div>
            <input type="file" multiple
                onChange={handleAvatar}
            />
            {avt && 
                avt.map((img) => {
                    return <img key={img} src={img} alt="" width="50%"/>
                })
            }
        </div>
    )
}
