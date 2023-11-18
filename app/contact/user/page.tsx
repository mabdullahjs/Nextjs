import React, { Suspense } from 'react'
import UserTable from './userTable'


interface Props {
  searchParams: { sortOrder: string }
}
const User = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense> */}
      <UserTable sortOrder={sortOrder} />

    </>
  )
}

export default User