import './App.css'
import React, { useState, useRef, useMemo } from 'react'
import UserList from './component/userList'
import CreateUser from './component/createUser'

function countAcitveUsers(users) {
  console.log('활성 사용자 수 세기')
  return users.filter((user) => user.active).length
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })

  const { username, email } = inputs
  const nextId = useRef(new Date())
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'vv',
      email: 'vv@email.com',
      active: false,
    },
    {
      id: 2,
      username: 'vv2',
      email: 'vv2@email.com',
      active: true,
    },
    {
      id: 3,
      username: 'vv3',
      email: 'vv3@email.com',
      active: false,
    },
  ])

  const onChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
    // console.log(`name: ${name}, value: ${value}`)
  }

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: username,
      email: email,
    }

    setUsers(users.concat(user))
    setInputs({ username: '', email: '' })
  }

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    )
  }
  const count = useMemo(() => countAcitveUsers(users),[users]);
  return (
    <>
      <CreateUser
        onChange={onChange}
        onCreate={onCreate}
        username={username}
        email={email}
      />
      <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
      <div>활성사용자수: {count}</div>
    </>
  )
}

export default App
