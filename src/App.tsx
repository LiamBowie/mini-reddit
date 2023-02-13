import { useState } from 'react'
import NavBar from './components/NavBar';
import CategoryButtons from './components/CategoryButtons';
import RedditCard from './components/RedditCard';

function App() {

  return (
    <div className="App h-screen bg-slate-200">
      <NavBar />

      <CategoryButtons />

      <div className="max-w-xl mx-auto">
        <RedditCard />
        <RedditCard />
      </div>
    </div>
  )
}

export default App;
