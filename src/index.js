import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, hashHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';

ReactDOM.render(
<BrowserRouter>
  <Route exact path="/" component={App} />
  <Route path="/Nav" component={Navigation} />
</BrowserRouter>,
 document.getElementById('root'));
/* ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
      </Router>,
    document.getElementById('root')
  );*/

serviceWorker.unregister();
