import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function App() {
  const handleClick = (event) => {
    console.log("Hello World!");
    console.log(event);
  }
  return (
    <button onClick={handleClick}>
      click me
    </button>
  )
  
}

