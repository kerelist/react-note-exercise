import React from 'react';
import 'tachyons';
import bird from '../images/bird.svg';

const NotFound = () => (
  <main className="bg-navy ma0 pa4 pb6">
    <h1 className="mw6 center p2 pt4 f1 light-gray relative">Oops! The page you're looking for doesn't exist. <img className="bounce w3 h3 absolute top-0 right-0" src={bird} alt="" /></h1>
    <a className="mw6 center db light-gray dim" href="/">Choose another note.</a>
  </main>
)

export default NotFound;