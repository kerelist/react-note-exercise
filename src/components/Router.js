import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFound from './404';

const basename = () => {
  return process.env.NODE_ENV === 'production' ? '/flynotes' : '/';
}

const Router = () => (
  <BrowserRouter basename={basename()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/view/:id" component={App} />
      <Route exact path="/edit/:id" render={
        props => (
          <App edit={true} {...props} />
        )
      } />
      <Route exact path="/list" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;