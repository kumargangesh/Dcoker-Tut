import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("")

  const handleName = (e) => {
    setCount(e.target.value);
  }

  return (
   <div>
    <input type="text" value={count} onChange={handleName} />
    <p>Hello {count} welcome to React-Docker-Demo</p>
   </div>
  )
}

export default App
