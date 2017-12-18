import React from 'react';
import Address from './addresses';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Address title={this.props.title}/>
      </div>
    )
  }
}

App.defaultProps = {
  title:"Welcome to my address book!"
}

export default App;