import React, { Component } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {

    return (
      <div>
        <Header/>
        <div className="center-body">
          <div className = "body-wrapper main">  
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
} 

export default App;
