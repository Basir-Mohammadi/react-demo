import React, { Component } from "react";
import AddNinja from "./AddNinja";
import Ninjas from "./ninjas";
class App extends Component {
  state = {
    ninjas : [
      {name: 'ahmad', age:30, belt:'black', id:1},
      {name: 'ali', age:21, belt:'black', id:2},
      {name: 'akbar', age:25, belt:'black', id:3}
    ]
  }

  addNinja =(ninja) => {
    ninja.id= Math.random();
    let ninjas =[...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja =(id) =>{
    const ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !==id
    })
    this.setState({
      ninjas: ninjas
    })
  }
render() {
  return (
    <div className="App">
      <Ninjas deleteNinja= {this.deleteNinja} ninjas={ this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
    </div>
  );
}
  
}

export default App;
