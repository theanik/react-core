import React, {useState, useEffect} from 'react'

const Hook = () => {

    const [name, setName] = useState('an')


    useEffect(() => {
        console.log('run')
        document.title = name
    })

    return (
        <div>
            <h2>{name}</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Hook
