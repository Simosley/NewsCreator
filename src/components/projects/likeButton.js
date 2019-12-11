import React, { Component } from 'react';

class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <i onClick={this.handleClick}  className="medium material-icons hoverable right">
             {this.state.isToggleOn ? 'favorite_border' : 'favorite'}
        </i>
        
        
        
        
      );
    }
  }

export default LikeButton;

//const ProjectDetails = (props) => {