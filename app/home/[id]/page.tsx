import React from 'react'


interface Props {
    params: { id: number }
}
const NestedHome = ({params:{id}}:Props) => {
    return (
        <div>NestedHome with id === {id}</div>
    )
}

export default NestedHome