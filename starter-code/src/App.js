import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import NavBar from './components/NavBar';
import Table from './components/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5),
      value: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  handleClick(){
      let newContacts = []
      for( var i = 0; i < this.state.contacts.length; i++){
      newContacts.push((contacts[i]))
      const result = Math.floor(Math.random()*this.state.contacts, 4)
      console.log(result),
      newContacts.push((result)),
      this.setState({
        contacts: newContacts
      })
    }
  }

deleteContact = (index) => {
      let deleteOne = []
      const a = contacts.splice(index, 1);
      console.log(a),
      deleteOne.push((a)),
      this.setState({
        contacts: deleteOne
      })
    
  }
  
  render() {
    console.log(this.state.contacts)
    
    return (
      <div className="App">
        <NavBar />
        <button id= "random" onClick={this.handleClick}><strong>Random Contact</strong></button>   
        {this.state.contacts.map((artists, i) => {
          return(
            <div>
              <center>
                <Table key={i} name={artists.name} popularity={artists.popularity} picture={artists.pictureUrl} deleteContact={this.deleteContact}
                /> 
              </center>
            </div>
          )
        })}


      </div>
      
    );
  }
}

export default App;
