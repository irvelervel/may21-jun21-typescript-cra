import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormComponent from './components/FormComponent'
// import MainComponent from './components/MainComponent'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <MainComponent title="I'm the lower title" count={0} subTitle="Who am I?" /> */}
          {/* <MainComponent title="I'm the lower title" count={0} /> */}
          {/* <FunctionalComponent title="Will this work?" subTitle="optional!" /> */}
          <Route exact path="/form" render={(routerProps) => <FormComponent title="FORM!!" {...routerProps} />} />
        </header>
      </div>
    </Router>
  )
}

export default App
