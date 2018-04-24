import React, { Component } from 'react';
import 'tachyons';
import trash from '../images/trash.svg';

class DeleteButton extends Component {

  deleteNote = () => {
    this.props.deleteNote(this.props.index);
  }

  render() {
    return (
      <button 
        onClick={this.deleteNote} 
        className="b--transparent bb db pointer pa2 pr1 db w-100 grow br3 bg-washed-green"
      >
        <span className="v-middle f7 avenir">Delete</span><img className="w1 h1 center ml1 v-middle" src={trash} alt="" style={{transform: 'scaleX(-1)'}} />
      </button>
    );
  }
}

export default DeleteButton;

