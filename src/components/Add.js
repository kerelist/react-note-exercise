import React, { Component } from 'react';
import 'tachyons';

class Add extends Component {

  goToEdit = () => {
    this.props.startNewNote();
  }

  render() {
    return (
      <button onClick={this.goToEdit} className="b--transparent bb db pointer pa3 db w-100 grow br3 bg-washed-green">
        <span role="presentation" className="f3 b mr2">+</span><span className="v-middle f4 avenir">Add a Note</span>
      </button>
    );
  }
}

export default Add;

