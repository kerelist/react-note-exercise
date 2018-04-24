import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import 'tachyons';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import './Note.css';

class Note extends Component {

  render() {
    const n = this.props.note;
    return (
      <div>
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
              <EditButton
                goToEdit = { this.props.goToEdit }
                index = { this.props.index } />
            </div>
            <h2 className="mt1 f2 athelas pr5">{n.title}</h2>
            <p className="tr f7">Last updated at {moment(n.date).format("MMMM Do YYYY, h:mm:ss a")}</p>
            <div className="editor">
              <ReactMarkdown source={n.content}/>
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

export default Note;