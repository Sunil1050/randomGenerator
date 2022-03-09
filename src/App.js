import RandomNumberGenerator from './components/RandomNumberGenerator'

import './App.css'

onGenerateRandomNumber = () => {
  const {randomNumber} = this.state
  this.setState({randomNumber: Math.ceil(Math.random() * 100)})
}

const App = () => <RandomNumberGenerator randomGenerator={onGenerateRandomNumber}/>

export default App
