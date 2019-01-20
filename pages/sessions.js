/**
 * Created by csalas on 1/16/19.
 */

import React, {Component} from 'react';
import axios from 'axios';
import SessionCard from '../src/SessionCard'

class sessions extends Component {
    static async getInitialProps() {
        return axios.get('http://localhost:4000/sessions')
            .then(data => {
                return {
                    serviceError: false,
                    sessions: data.data
                };
            })
            .catch(err => {
                return {
                    serviceError: true,
                    message: err.message
                };
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            serviceError: props.serviceError,
            message: props.message,
            sessions: props.sessions
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card-deck">
                            { this.state.sessions.map(
                                data =>
                                    <SessionCard session={data} key/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default sessions;
