import React from 'react'

function CreateUser({onChange, onCreate, username, email,}) {
    return (
        <div>
            <input onChange={onChange} name='username' value={username} />
            <input onChange={onChange} name='email' value={email} />
            <button onClick={() => onCreate()}>Add</button>
        </div>
    )
}

export default CreateUser
