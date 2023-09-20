import React from 'react'

interface User {
    id:number;
    name:string
}
const User = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data :User[] = await res.json()
  return (
    <>
    {data.map(item => <div key={item.id}>
        {item.name}
    </div>)}
    </>
  )
}

export default User