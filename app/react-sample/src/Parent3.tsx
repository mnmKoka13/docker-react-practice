import React, { useContext } from 'react';

type User = {
  id: number
  name: string
}

const UserContext = React.createContext<User | null>(null);

const GrandChiled = () => {
  const user = useContext(UserContext)
  return user !== null ? <p>Hello, {user.name}</p> : null
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      <p>Current: {now.toLocaleDateString()}</p>
      <GrandChiled />
    </div>
  )
}

const Parent3 = () => {
  const user: User = {
    id: 1,
    name: 'Alice'
  }

  return (
    <UserContext.Provider value={user}>
      <h3>useContext</h3>
      <Child />
    </UserContext.Provider>
  )
}

export default Parent3