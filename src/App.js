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
render() {
  return (
    <div className="App">
      <Ninjas ninjas={ this.state.ninjas}/>
      <AddNinja />
    </div>
  );
}
  
}

export default App;
