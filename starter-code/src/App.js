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
    handleSubmit(e){
    e.preventDefault();
    this.state.onAdd(this.state);
    }
    increment(event) {
    this.setState({
        value: this.state.value + 1
    });
};
addRow(){
  this.setState({contacts: this.state.contacts + 1});
  var listContacts = {id: this.state. contact};
  var allContact = this.state.contacts.concat([listContacts]);
  this.setState({contacts: allContact});
}
/*addItems(item){
    this.setState({items:this.state.items.concat(item)})
      console.log(this.state.items) // this is working
    }*/
addContact(){
  this.setState({contacts: this.state.contacts + 1});
  let newContact = this.state.contacts.slice();
  var allContact = this.state.contacts.concat([newContact]);
  this.setState({
    items: allContact
  })
  console.log(this.state.contacts)
}
removeItem(index){
  this.setState({
    items: this.state.contacts.filter((e, i)=>{
      return i !== index
    })
  })
}



  
  /*handleClick = () => {
    let newContact = [];
    for( var i = 0; i < this.state.contacts.length; i++)
    newContact.push(contacts[i])
    
    this.setState({
      contacts: newContact(Math.floor(Math.random()*5)+1)
    })
    console.log(this.state)
    }

    /*addContact(){
      this.setState({contacts: this.state.contacts + 1});
      let newContacts = this.state.contacts(Math.floor(Math.random()*5) + 1);
      var totalContacts= this.state.items.concat([newContacts]);
      this.setState({
        items: totalContacts
      })
      console.log(this.state.contacts)
    }*/
  
   
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
