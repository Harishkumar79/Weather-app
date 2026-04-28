import { useState } from 'react'
import './App.css'
import Search from './views/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <h1>Search Your City Weather!</h1>
      <Search/>
    </div>
  )
}

export default App
