import { Component } from 'react'

// MainComponent is not expecting to receive any prop by default
// we need to give MainComponent awereness of which props its going to receive!
// we need to give the props object a shape, we need to create an INTERFACE

interface MainComponentProps {
  title: string
  subTitle?: string // optional prop, the component may/may not receive it
  count: number
}

interface MainComponentState {
  name: string
  // books: Book[]
}

// Array<string>
// string[]

class MainComponent extends Component<MainComponentProps, MainComponentState> {
  state: MainComponentState = {
    name: 'Stefano',
  }

  render() {
    return (
      <div>
        <h2>I'm The Main Typescript Component!</h2>
        <h4>{this.props.title}</h4>
        <h5>{this.props.subTitle || 'No subTitle prop received!'}</h5>
        <button onClick={() => this.setState({ name: 'Rafa' })}>{this.state.name}</button>
      </div>
    )
  }
}

export default MainComponent

// const greet = (name) => console.log(name)
// greet('Ingrid')
