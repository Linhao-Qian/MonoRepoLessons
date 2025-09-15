import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>('')
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Linhao Qian's CS 5500!</h1>
        <p>This is my first React Vite TypeScript project.</p>
        <button className="primaryButton" onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
        <input
          className="textInput"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="primaryButton" onClick={() => setName(name)}>
          Submit
        </button>
      </header>
    </div>
  )
}

export default App