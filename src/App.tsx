import React from 'react'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
// import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MainComponent title="I'm the lower title" count={0} subTitle="Who am I?" /> */}
        {/* <MainComponent title="I'm the lower title" count={0} /> */}
        <FunctionalComponent title="Will this work?" subTitle="optional!" />
      </header>
    </div>
  )
}

export default App
