import { useState } from 'react'

// import styles from './App.module.css'
// import './style.css';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


export default function Form() {
  const [username, setUsername] = useState();
  const [usernameError, setUsernameError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(usernameError){
      alert('Unable to submit: Form contain errors');
    } else {
      alert(username);
    }

    
  }

  const handleUsername = e => {
    const {value} = e.target;
    setUsername(value);

    if(value.length <= 6) {
      setUsernameError('Username length must be more than 6 characters');
    } else {
      setUsername();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      Username:
      <input 
        type='text' 
        value={username}
        onChange={handleUsername}
      />
      <p>{usernameError} </p>
      <button>Submit</button>
      </form>

    
    </>
    
  )
  
  
}

