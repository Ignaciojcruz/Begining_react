import { useState } from 'react'

// import styles from './App.module.css'
// import './style.css';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


export default function Form() {
  const [username, setUsername] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(username);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      Username:
      <input 
        type='text' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>Submit</button>
      </form>

    
    </>
    
  )
  
  
}

