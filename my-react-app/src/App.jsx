import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function App(props) {
  const { user } = props

  let button = <button>Login</button>

  if (user) {
    button = <button>Logout</button>
  }

  return (
    <>
      <h1>Hello there!</h1>
      {button}
    </>
  )
  
}

