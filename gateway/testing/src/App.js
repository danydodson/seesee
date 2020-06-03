import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  state = {
    testing: '...'
  }

  componentDidMount = async () => {
    try {
      const res = await axios.get('/testing')
      console.log(res)
      this.setState({ testing: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return (
      <div className='App'>
        <p> "Hello services !" -- says the [gateway testing client] </p>
        <p> "{this.state.testing}" -- says the [testing service] </p>
      </div>
    )
  }

}

export default App
