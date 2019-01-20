/**
 * Created by csalas on 1/19/19.
 */
import React, {Component} from 'react';
import Link from "next/link";

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link>
                                <a className="nav-link" href="/">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/speakers" >
                                <a className="nav-link">Speakers</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sessions" >
                                <a className="nav-link">Sessions</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
