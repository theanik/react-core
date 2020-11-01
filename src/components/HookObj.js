import React, {useState} from 'react'

const HookObj = () => {

    const [user, setUser] = useState({
        id : '',
        name : ''
    })

    return (
        <div>
            ID : {user.id}
            Name : {user.name}
            <form >

                    <label>
                    ID:
                    <input type="text" value={user.id} onChange={(e) => setUser({...user,id : e.target.value})} />
                    </label>
                    <label>
                    Name:
                    <input type="text" value={user.name} onChange={(e) => setUser({...user, name : e.target.value})} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>


        </div>
    )
}

export default HookObj
