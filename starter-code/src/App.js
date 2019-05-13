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
      randomContact: [],
      value: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  handleClick(e){
    let newContacts = [];
    for( var i = 0; i < this.state.contacts.length; i++)
    newContacts.push(contacts[i])
    this.setState({
        contacts: newContacts,
    })
    console.log(this.state)
    }
  addContact(){
    this.setState({contacts: (Math.floor(Math.random()*5)+1)});
  }

removeItem(index){
  this.setState({
    items: this.state.contacts.filter((e, i)=>{
      return i !== index
    })
  })
}

    deleteItem = (index) => {
      const {contacts} = this.state;
      contacts.splice(index, 1);
      this.setState({contacts});
    }
 
  render() {
    console.log(this.state.contacts)
    console.log(this.state.randomContact)
    return (
      <div className="App">
        <NavBar />
        {this.state.contacts.map((artists, i, deleteItem, handleClick) => {
          return(
          //console.log(artists.pictureUrl)
            <center>
              <Table key={i} name={artists.name} popularity={artists.popularity} picture={artists.pictureUrl} 
              deleteItem={() => deleteItem(i)} key={i} {...artists}
              />
              <button onClick={this.handleClick}>{this.state.artists}</button>   
              
            </center>
          )
          
        })}


      </div>
      
    );
  }
}

export default App;
