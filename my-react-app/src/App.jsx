import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function App() {
  // State to hold the visibility status of the paragraph
  const [isParagraphVisible, setIsParagraphVisible] = useState(true);

  // Function to toggle the visibility status of the paragraph
  const toggleStatus = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <>
      <h1>Change UI Based on click</h1>
      {isParagraphVisible && (
        <p>This paragraph will be shown/hidden on click</p>
      )}
      <button onClick={toggleStatus}>
        {isParagraphVisible ? 'Hide' : 'Show'} Paragraph
      </button>
    </>
  )
  
}

