import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function ParentComponent() {
  function greetings() {
    return 'Hello World'
  }

  return <ChildComponent greetings={greetings} />
  
}

function ChildComponent(props) {
  return <p>{props.greetings()}</p>
}
