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
    //this.addContact = this.addContact.bind(this);
  }

  handleClick(){

      let newContacts = []
    for( var i = 0; i < this.state.contacts.length; i++){
      const result = (Math.floor(Math.random()* (contacts.length*4))
      console.log(result)
      newContacts.push(contacts.concat(result))
      this.setState({
        contacts: newContacts
      })
    }
    

    


    
  }

/*removeItem(index){
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
 */
  render() {
    console.log(this.state.contacts)
    
    return (
      <div className="App">
        <NavBar />
        {this.state.contacts.map((artists, i) => {
          return(
          //console.log(artists.pictureUrl)
            <center>
              <Table key={i} name={artists.name} popularity={artists.popularity} picture={artists.pictureUrl} 
              removeItem={this.props.removeItem}
              />
              <button onClick={this.handleClick}></button>   
              <button addContact={this.addContact}>{this.state.artists}</button>   
            </center>
          )
          
        })}


      </div>
      
    );
  }
}

export default App;
