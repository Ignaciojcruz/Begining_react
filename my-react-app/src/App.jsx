import { useEffect, useState } from 'react'

// import styles from './App.module.css'
// import './style.css';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


export default function Form() {
  const[title, setTitle] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const task = await response.json();
    console.log(task);
    setTitle(task.title);
  }
  
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

