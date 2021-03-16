import React, {Component} from 'react';
import Contacts from './components/contacts';

class Contact extends React.Component {
    constructor() {
      super();
      this.state = [];  
    }
  
    render() {
        return (
            <h1>hello Rhodri</h1>
  //          <Contacts contacts={this.state.contacts} />
        )
    }

//    this.state = {
 //       contacts: []
  //  };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

export default Contact;
