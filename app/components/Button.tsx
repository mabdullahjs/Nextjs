'use client'

import React from 'react'

const Button = () => {
  return (
    <button onClick={()=>console.log('client component')
    }>Add to cart</button>
  )
}

export default Button