import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercard from './components/Usercard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      < Usercard/>
    </div>
  )
}

export default App
