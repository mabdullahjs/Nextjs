import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}
const User = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // if we dont want to store data on cache

  // const res = await fetch('https://jsonplaceholder.typicode.com/users' , {
  //   // cache:'no-store',
  //   // next:{revalidate:10} // come data in every 10 seconds
  // });
  const data: User[] = await res.json();
  return (
    <>
      <h1 className='text-3xl text-center mt-2'>Users</h1>
      <div className='px-[20rem] mt-[5rem]'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default User