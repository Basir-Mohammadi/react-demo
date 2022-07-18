import React, { Component } from "react";
import Ninjas from "./ninjas";
class App extends Component {
  state = {
    ninjas : [
      {name: 'ahmad', age:30, belt:'black', id:1},
      {name: 'ahmad', age:30, belt:'black', id:2},
      {name: 'ahmad', age:30, belt:'black', id:3}
    ]
  }
render() {
  return (
    <div className="App">
      <Ninjas ninjas={ this.state.ninjas}/>
    </div>
  );
}
  
}

export default App;
