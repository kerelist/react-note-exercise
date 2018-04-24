import React, { Component } from 'react';
import moment from 'moment';
import 'tachyons';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import './Note.css';

class Edit extends Component {

  inputDidChange = event => {
    const updatedText = {
      ...this.props.note,
      [event.currentTarget.name]: event.currentTarget.value,
      "date": new Date()
    }
    this.props.inputDidChange(this.props.index, updatedText);
  }

  render() {
    const n = this.props.note;

    return (
      <div role="form">
        {
          !n &&
          <div>
            <p className="tc f4 pt5">Add or select a note to get started!</p>
            <p className="tc f4">• • •</p>
          </div>
        }
        {
          n &&
          <div className="wrapper">
            <div className="absolute top-1 right-1">
              <SaveButton
                goToView = { this.props.goToView }
                index = { this.props.index }
              />
            </div>
            <h2 className="mt1 f2 athelas pr5">
              <input 
                type="text" 
                name="title" 
                onChange={this.inputDidChange} 
                defaultValue={n.title} />
            </h2>
            <p className="tr f7">Last updated at {moment(n.date).format("MMMM Do YYYY, h:mm:ss a")}</p>
            <div className="editor">
              <textarea 
                name="content" 
                onChange={this.inputDidChange} 
                defaultValue={n.content} />
            </div>
            <div className="absolute bottom-1 right-1">
              <DeleteButton 
                index = {this.props.index}
                deleteNote = {this.props.deleteNote} />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Edit;