import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class FullPage extends Component {
    render(){
        return (
            <div>
                <h2>PAGE TOP</h2>
                <div>
                    <Router>
                        <div>
                            <Switch>
                                <Route exact path='/' render={() => <div>Home Page</div>}></Route>
                                <Route render={() => <div>Not Found</div>}></Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}

export default FullPage;