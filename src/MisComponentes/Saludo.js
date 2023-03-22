import { Component } from 'react';

class Saludo extends Component {
    constructor(props){
      super(props);
      this.state={
        user: "Oscar"
      }
    }

    handleInput = (e) => {
        this.setState({user: e.target.value });
    }

    render(){ 
      return (
        <div>
            <h1>Hola {this.state.user}</h1>
            <input type="text" onInput={this.handleInput}></input>
        </div>
      );
    }
  }
  export default Saludo;