  handleInput(e){
    e.preventDefault();
    const contact = this.state.contacts.concat([{
      name: this.state.name, 
      number: this.state.number,
      address: this.state.address
    }])
    this.setState({
      contacts: contact
    })
  }
