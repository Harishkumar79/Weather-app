import { useState } from 'react'
import './App.css'
import Weather from './views/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <h1>Search Your City Weather!</h1>
      <Weather/>
    </div>
  )
}

export default App
