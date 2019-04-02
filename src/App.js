import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { mockAPI, add } from './actions';
import './App.css';

export class App extends Component {
    state = {
        username: 'dd',
        testState:'',
        test:""
    }

    write = (e) => {
        e.preventDefault()
        this.setState({
            username: e.target.value
        })
    }

    click = (e) => {
        e.preventDefault()
        this.props.mockAPI(this.state.username)
        this.setState({
            username: ''
        })
    }
    componentDidMount(){
      this.setState({
        test:'LOOL'
      })
    }
    render() {
        return (
            <div id="article-div">
      <button  onClick={()=>this.props.add('KEKISTAN)))')}>ADD</button>
       <form onSubmit={this.click}>
      <input  value={this.state.username} onChange={this.write.bind(this)} />
       <div id='kurwa'>{this.state.test}</div>
      <button id='clicks' onClick={this.click}>ADD FROM API</button>
    </form>
      <ul>
        {this.props.reducer2.map((elem, id)=>{
          return (<h1 key={id}><img src={elem.ava}/>{elem.username}</h1>)
        })}
      </ul>
      <div id="checkState">{this.state.testState}</div>
      <div id="props">{this.props.reducer1}</div>
      </div>
        );
    }
}

export default connect(state => { return state }, {
    mockAPI,
    add
})(App);