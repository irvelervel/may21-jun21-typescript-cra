import React from 'react'
import './App.css'
import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainComponent title="I'm the lower title" subTitle="Who am I?" />
        <MainComponent title="I'm the lower title" />
      </header>
    </div>
  )
}

export default App
