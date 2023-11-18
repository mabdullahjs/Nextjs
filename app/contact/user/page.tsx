import React from 'react'
import UserTable from './userTable'


interface Props {
  searchParams: { sortOrder: string }
}
const User = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
    <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default User