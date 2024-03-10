import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function App(props) {
  const newEmails = 2

  return (
    <>
      <h1>Hello there!</h1>
      {newEmails > 0 &&
        <h2>
          You have {newEmails} new emails in your inbox.
        </h2>
      }
    </>
  )
  
}

