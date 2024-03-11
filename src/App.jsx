import { useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'

function App() {
  const [phrase, setPhrase] = useState('')
  const {image} = useCatImage({phrase})

  const handleClick = async() =>{
    const newFact = await getRandomFact()
    setPhrase(newFact)
  }

  return (
    <>
     <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
     }}>
      <div>
        <h1>Gatitos App</h1>
        {phrase && <p>{phrase}</p>}
      <button onClick={handleClick}>Get New Cat </button>
      </div>
        {image && <img style={{
          maxWidth:'400px',
          marginLeft: '40px',
        }} 
        src={image} alt={phrase}/>}
     </div>
    </>
  )
}

export default App
