import React, { Component } from 'react';
class Body extends Component {

  constructor(props,context){
    super(props, context);
  }
  render() {

    return (
      <div className="center-body">
        <div className = "body-wrapper main">  
          {this.props.children}
        </div>
      </div>
    )
  }
} 

export default Body;