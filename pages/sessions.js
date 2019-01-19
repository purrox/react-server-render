/**
 * Created by csalas on 1/16/19.
 */

import React, {Component} from 'react';
import axios from 'axios';

class sessions extends Component {
    static async getInitialProps(){
        return axios.get('http://localhost:4000/sessions')
            .then( data => {
                return{
                    serviceError: false,
                    speakerData: data.data
                };
            })
            .catch( err=>{
                return{
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
            speakerData: props.speakerData
        }
    }

    render() {
        return (
            <div>

                <ol>
                    { this.state.speakerData.map(
                        data =>
                            <li key={data.id}>
                                {data.title}
                            </li>
                    )}
                </ol>

            </div>
        );
    }
}

export default sessions;
