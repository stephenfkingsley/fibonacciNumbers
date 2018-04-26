import React, { Component } from 'react'
import { View, Text } from 'react-native'

 function mapFib (num, index) {
  return <Text key={index}>{num}</Text>
}

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fibos: [0, 1],
    }
  }


  componentDidMount() {
    this.timer = setInterval(() => {
     const fibos = this.state.fibos
      this.setState({
        fibos: [...fibos, fibos[fibos.length - 1] +fibos[fibos.length - 2]]
     })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
        <View>
          <Text>{console.log()}</Text>
          <Text>FIBONACCI NUMBERS</Text>
          <Text>NUMBER: {this.state.fibos.length}</Text>
          <Text>SUM: {this.state.fibos.map(num => num * num).reduce((prev, curr) => prev + curr, 0)}</Text>
          { this.state.fibos.map(mapFib)}
        </View>
      )
  }
}

export default App

//40:38