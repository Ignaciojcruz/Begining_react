import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function App(props) {
  const { user } = props

  if (user) {
    return <button>Logout</button>
  }
  return <button>Login</button>
  
}

