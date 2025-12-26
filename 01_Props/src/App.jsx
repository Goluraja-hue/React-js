import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div id='parent'>
       <Card user='Golu Kumar' age={19} image='https://images.unsplash.com/photo-1635241161466-541f065683ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2R8ZW58MHx8MHx8fDA%3D' />
       <Card user='Anshu Kumar' age={16} image='https://images.unsplash.com/photo-1697498435309-2c7864cfd607?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDNkfGVufDB8fDB8fHww' />

    </div>
  )
}

export default App