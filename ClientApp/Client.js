import React from 'react';
import ReactDOM from 'react-dom';
import FullPage from './components/common/FullPage';
import {BrowserRouter as Router, browserHistory} from 'react-router-dom';

ReactDOM.hydrate(
    <Router history={browserHistory}>
        <FullPage/>
    </Router>,
    document.getElementById("app"));