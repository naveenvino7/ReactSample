import React from 'react';

class Fetch  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            apiCall : "http://api.weatherstack.com/current?access_key=f67741a679fbe3aafecc6c2214a66aaa&query="+this.props.name,
            name : this.props.name
        }
    }
    componentDidMount() {
        console.log( "API CALL" , this.state.apiCall);
        fetch(this.state.apiCall)
          .then(res => res.json())
          .then(
            (results) => {
              this.setState({
                isLoaded: true,
                items: results
              });
              console.log(this.state.items,this.state.items.current.temperature);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          console.log(this.state.apiCall);
          return (
            <div>
        <h3>Weather in {this.props.name}</h3>
        <ul>
          <li>temperature : {items.current.temperature}</li>
          <li>Pressure : {items.current.pressure}</li>
          <li>Humidity : {items.current.humidity}</li>
        </ul>
            </div>
          );
        }
     }
}

export default Fetch;
