import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const pStyle = {
  fontSize: '16px',
  color: 'blue'
}

export default function App() {

  //the first set of curly brackets is used to write JavaScript expressions. 
  // The second set of curly brackets initializes a JavaScript object.
  return (
    <>
      <h1 style={{ color: 'red', textAlign: 'center' }}>Hello World</h1>
      
      <p style={pStyle}>Hello World</p>
      <p style={pStyle}>The weather is sunny today</p>

      <p style={{ ...pStyle, color: 'green', textAlign: 'right'}}>
        When you go to work, bring your umbrella with you
      </p>
    </>
    

    
  )
  
}

