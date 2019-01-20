import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu'


export class Layout extends Component {
    render() {
        const {children} = this.props

        return (
            <React.Fragment>
                <Header/>
                <Menu/>
                {children}
                <Footer/>
            </React.Fragment>
        );
    }
}