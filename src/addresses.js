import React from 'react';
import Display from './display';

class Address extends React.Component {

  constructor(){
    super();
    
    this.state={
      name:'',
      number: '',
      address: '',
      contacts: [],
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const contact = this.state.contacts.concat({
      name: this.state.name,
      number: this.state.number,
      address: this.state.address
    })
    this.setState({
      contacts: contact,
      name: '',
      number: '',
      address: ''
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const contactInfo = this.state.contacts.map( (item, index) => <Display key={index} name={item.name} number={item.number} address={item.address}/>);

    return(
      <div>
        <h1>{this.props.title}</h1>
        <form>
          <input placeholder="name" name="name" onChange={this.handleChange} value={this.state.name}></input>
          <input placeholder="number" name="number" onChange={this.handleChange} value={this.state.number}></input>
          <input placeholder="address" name="address" onChange={this.handleChange} value={this.state.address}></input>
          <button onClick={this.handleSubmit}>Add</button>
        </form>

        {contactInfo}
      </div>
    )
  }
}

export default Address;