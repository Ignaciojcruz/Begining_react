import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function App(props) {
  const { user } = props

  return (
    <>
      <h1>Hello there!</h1>
      { user? <button>Logout</button> : <button>Login</button> }
    </>
  )
  
}

