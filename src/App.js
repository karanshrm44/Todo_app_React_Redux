import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Display from './container/Display';

class App extends Component {
  render() {
    
    let display=this.props.show.map((item,index)=>{
      return (
        <Display key={index}
         item={item}
         clicked={()=>this.props.remove(index)}
        />
      )
    })
    
    return (
      <div className="App">
          <p>React Redux Todo App</p>
          <input type="text" value={this.props.res} onChange={(e)=>this.props.onAdd(e.target.value)} />
          <button onClick={this.props.onDisplay}>Submit</button>
          {
            display
          }
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    res:state.value,
    show:state.arr

  }
}

const mapDispatchToProps=dispatch=>{
  return {
    onAdd:(value)=>dispatch({type:"ADD",value}),
    onDisplay:()=>dispatch({type:"DISPLAY"}),
    remove:(index)=>dispatch({type:"REMOVE",value:index})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
