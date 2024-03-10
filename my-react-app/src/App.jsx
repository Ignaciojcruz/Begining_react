import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function ParentComponent() {
  const [name, setName] = useState('John')

  return <ChildComponent name={name} setName={setName} />
  
}

function ChildComponent(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
      <button onClick={() => props.setName('Mark')}>Change Name</button>
    </>
  )
}
