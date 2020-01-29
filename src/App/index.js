import React from 'react';
import Fetch from './Fetch';
class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event){
  this.setState({name: event.target.value});
}
handleSubmit(event){
  console.log(this.state.name);
  this.setState({name: this.state.name});
  this.setState({data: <Fetch name={this.state.name}/>})
  event.preventDefault();
}
  render() {
    const data = this.state.data;
    return (  
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          CITY :
          <input type="text" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Fetch" />
      </form>
      {data}
      </div>      
    );
  }
}
export default App;