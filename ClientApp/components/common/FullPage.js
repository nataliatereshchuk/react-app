import React, {Component} from 'react';
import Routes from '../../Routes';
import Menu from './Menu';
import Footer from './Footer';

class FullPage extends Component {
    render(){
        return (
            <div>
                <Menu/>
                <Routes/>
                <Footer/>
            </div>
        )
    }
}

export default FullPage;