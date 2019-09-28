import React from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter incrementBy={1} />
      <Counter incrementBy={5} />
      <Counter incrementBy={10} />
    </div>
  );
}

export default App;
