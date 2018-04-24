import React, { Component } from 'react';
import 'tachyons';
import uuid from 'uuid';
import moment from 'moment';
import Add from './components/Add';
import Note from './components/Note';
import Edit from './components/Edit';
import NoteList from './components/NoteList';
import './App.css';
import bird from './images/bird.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          'id': uuid.v4(),
          'title': 'Example Note',
          'date': moment(new Date(), moment.ISO_8601),
          'content': '**Please Note**\n\nThis app supports [Github-flavoured](https://github.github.com/gfm/) markdown!'
        }
      ],
      currentNote: 0,
      edit: false
    }
  };

  findCurrentNote = (arr, compareId) => {
    return arr.findIndex(note => note.id === compareId);
  }

  isExistingNote = () => {
    return typeof this.props.match.params.id !== 'undefined';
  }

  startNewNote = () => {
    const notes = this.state.notes;

    notes.push({
      'id': uuid.v4(),
      'title': '',
      'date': moment(new Date(), moment.ISO_8601),
      'content': ''
    });

    const newIndex = notes.length > 0 ? notes.length - 1 : 0;

    this.setState({
      notes: notes,
      currentNote: newIndex,
      edit: true
    });

    this.props.history.push(`/edit/${notes[notes.length - 1].id}`)
  }

  inputDidChange = (key, updatedText) => {
    const notes = this.state.notes;
    notes[key] = updatedText;
    this.setState({ notes });
  }

  goToView = (key) => {
    const notes = this.state.notes;
    const viewId = notes[key].id;
    this.setState({ 
      notes, 
      currentNote: key,
      edit: false
    });
    this.props.history.push(`/view/${viewId}`);
  }

  goToEdit = (key) => {
    const editId = this.state.notes[key].id;
    this.setState({ edit:true });
    this.props.history.push(`/edit/${editId}`);
  }

  deleteNote = (key) => {
    const notes = this.state.notes;
    const newIndex = key > 0 ? key - 1 : 0;
    const newId = notes[newIndex] ? notes[newIndex].id : 0;
    delete notes[key];
    this.setState({ 
      notes,
      currentNote: newIndex
       });
    this.props.history.push(`/view/${newId}`);
  }

  componentDidMount() {
    this.setState({
      currentNote: 0,
      edit: false
    });
  }


  render() {
    return (
      <div className="center">
        <header role="banner" className="bg-lightest-blue dark-gray pa3 tc">
          <h1 className="f1 athelas ma0">Fly Notes <img className="bounce w3 h3" src={bird} alt="a small flock of distant birds bobs up and down" /></h1>
          <p className="f5 avenir i">just trying some fly stuff</p>
        </header>
        <main role="main" className="mw8 center pv2 main">
          <section className="w-100 w-40-ns pa3 dib v-top">
            <Add startNewNote={this.startNewNote} />
            <NoteList 
              notes = {this.state.notes}
              goToView = { this.goToView } />
          </section>
          <section className="w-100 w-60-ns pa3 dib v-top relative">
            {
              this.state.edit &&
              <Edit 
                key = {this.state.currentNote}
                index = {this.state.currentNote}
                note = {this.state.notes[this.state.currentNote]} 
                inputDidChange = {this.inputDidChange}
                goToView = {this.goToView}
                deleteNote = {this.deleteNote} />
            }
            {
              !this.state.edit &&
              <Note 
                key = {this.state.currentNote}
                index = {this.state.currentNote}
                note = {this.state.notes[this.state.currentNote]}
                goToEdit = {this.goToEdit}
                deleteNote = {this.deleteNote} />
            }
          </section>
        </main>
        <footer role="contentinfo" className="pa3 bg-light-green near-black avenir">
          <p className="">&copy; Andrea Kereliuk 2018</p>
          <p className="f7 ma0 mt1">Pencil icon used under Creative Commons, made by Jean-Philippe Cabaroc at <a href="https://thenounproject.com/search/?q=pencil&i=110866" target="_blank" rel="noopener noreferrer">The Noun Project</a></p>
          <p className="f7 ma0">Birds icon used under Creative Commons, made by Valeriy at <a href="https://thenounproject.com/search/?q=bird&i=1199656" target="_blank" rel="noopener noreferrer">The Noun Project</a></p>
          <p className="f7 ma0">Notes icon used under Creative Commons, made by Hea Poh Lin at <a href="https://thenounproject.com/search/?q=note&i=470403" target="_blank" rel="noopener noreferrer">The Noun Project</a></p>
          <p className="f7 ma0">Trash icon used under Creative Commons, made by Nesdon Booth at <a href="https://thenounproject.com/search/?q=trash&i=91285" target="_blank" rel="noopener noreferrer">The Noun Project</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
