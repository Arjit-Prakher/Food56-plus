import React from 'react'
import Navbar from './components/Header/Navbar'
import Mainroutes from './main-routes/Mainroutes'
import Body from './components/Body/Body'

const App = () => {
  return (
    <Body>
      <Navbar />
      <Mainroutes />
    </Body>
  )
}

export default App