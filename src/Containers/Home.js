import React from 'react'
import IngredientsContainer from '../Containers/IngredientsContainer'
import Fridge from '../Components/Fridge'

class Home extends React.Component {

  state = {
    fridge: []
  }



  render(){
    return(
      <div>
        <IngredientsContainer/>
        <Fridge/>
      </div>
    )
  }
}

export default Home
