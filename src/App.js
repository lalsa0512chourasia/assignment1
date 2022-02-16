import React from 'react'
import './App.css';
import './Components/Style.css';
import Functional from './Components/Functional'
import ClassCompo from './Components/ClassCompo'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFunctional: false,
      isClass: false,
    }
  }

  //     showFunction= ()=>{
  //    this.setState({isFunctional:!this.state.isFunctional})
  //    this.setState({isClass:!this.state.isClass})
  // }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Styling Using Functional and Class Component </h1>
          <button onClick={() => this.setState({ isFunctional: !this.state.isFunctional })}>To see styling in Function Component</button>
          <button onClick={() => this.setState({ isClass: !this.state.isClass })}>To see styling in Class Component</button>
          {/* <Functional/> */}
          {this.state.isFunctional && <Functional />}
          {this.state.isClass ? <ClassCompo /> : null}
        </div>
      </div>
    );
  }
}

export default App;
