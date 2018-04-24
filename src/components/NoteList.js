import React, { Component } from 'react';
import moment from 'moment';
import 'tachyons';
import notesIcon from '../images/notesIcon.svg';

class NoteList extends Component {

  goToView = (index) => {
    this.props.goToView(index);
  }

  render() {

    const notes = this.props.notes;

    return (
      <nav className="pt1 bt bw3 b--dark-blue mt3">
        <ul className="list pl0">
          {
            notes.map((note, index) => 
              <li className="black-80 ma1 shadow-4" key={index}>
              <button 
                className=" br3 db b--transparent pt4 pb3 pr2 pl2 h-100 w-100 pa2 dim pointer relative" 
                onClick={()=>this.goToView(index)}
              >
                <p className="avenir absolute top-1 left-1 ma0 f7">{moment(note.date).format("DD-MM-YYYY")}</p>
                <p className="athelas f4 ma0 mt1">{note.title}</p>
              </button>
              </li>
            )
          }
        </ul>
        <img className="w2 h2 center db" src={notesIcon} alt="" />
      </nav>
    );
  }
}

export default NoteList;