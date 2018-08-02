import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path='/' render={() => <div>Home Page</div>}></Route>
                        <Route render={() => <div>Not Found</div>}></Route>
                    </Switch>
                </div>
        );
    }
}

export default Routes;