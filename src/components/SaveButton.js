import React, { Component } from 'react';
import 'tachyons';
import pencil from '../images/pencil.svg';

class SaveButton extends Component {

  goToView = () => {
    this.props.goToView(this.props.index);
  }

  render() {
    return (
      <button onClick={this.goToView} className="b--transparent bb db pointer pa2 pr1 db w-100 grow br3 bg-washed-green">
        <span className="v-middle f7 avenir">Save</span><img className="w1 h1 center ml1 v-middle" src={pencil} alt="" style={{transform: 'scaleX(-1)'}} />
      </button>
    );
  }
}

export default SaveButton;

