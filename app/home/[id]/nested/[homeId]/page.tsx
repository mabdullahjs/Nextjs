import React from 'react'


interface Props {
    params: { id: number; homeId:number }
}
const DynamicHome = ({params:{id , homeId}}:Props) => {
  return (
    <div>DynamicHome with id === {id} and dynamic id {homeId}</div>
  )
}

export default DynamicHome