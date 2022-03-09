import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}
  const {randomGenerator} = this.props
  
  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.randomGenerator}
          >
            Generate
          </button>
          <p classNumber="num">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
