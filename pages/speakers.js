/**
 * Created by csalas on 1/19/19.
 */

import React, {Component} from 'react';
import axios from 'axios';
import SpeakerCard from '../src/SpeakerCard';

class Speakers extends Component {

    static async getInitialProps(){
        return axios.get('http://localhost:4000/speakers')
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

    constructor(props){
        super(props);
        this.state = {
            serviceError: props.serviceError,
            message: props.message,
            speakerData: props.speakerData
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                        {
                            this.state.speakerData.map
                            (
                            speaker =>
                                <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
                                 <SpeakerCard speaker={speaker}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Speakers;
