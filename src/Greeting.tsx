import * as React from 'react'

interface GreetingProps {
  name: string
}

class Greeting extends React.Component<GreetingProps, {}> {
  render() {
    return <h1>Greeting, {this.props.name}</h1>
  }
}

export default Greeting
