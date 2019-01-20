/**
 * Created by csalas on 1/19/19.
 */

import React, {Component} from 'react';
import axios from 'axios';
import SpeakerCard from '../src/SpeakerCard';
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

class Speakers extends Component {

    static GetSpeakersUrl() {
        if (process.env.NODE_ENV === "production") {
            return process.env.RESTURL_SPEAKERS_PROD
                || publicRuntimeConfig.RESTURL_SPEAKERS_PROD;
        } else {
            return process.env.RESTURL_SPEAKERS_DEV;
        }
    }

    static async getInitialProps(){
        return axios.get(Speakers.GetSpeakersUrl())
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
