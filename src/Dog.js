import React, { Component } from 'react';

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount(){
    console.log('DOG DID MOUNT!!!')
  }
  componentWillUnmount(){
    console.log('DOG DID UNMOUNT!!!')
  }
  render() {
    console.log('DOG RENDERD');
    return (
      <div>
        <h1>THE DOG</h1>
        <h2>{this.props.name} - some data</h2>
        <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80" alt=""/>
      </div>
    );
  }
}
 
export default Dog;