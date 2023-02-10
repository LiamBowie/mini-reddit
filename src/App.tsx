import { useState } from 'react'
import NavBar from './components/NavBar';
import CategoryButtons from './components/CategoryButtons';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />

      <CategoryButtons />
    </div>
  )
}

export default App
