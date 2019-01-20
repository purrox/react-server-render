/**
 * Created by csalas on 1/14/19.
 */

import React, {Component} from 'react';
import axios from 'axios';

class Index extends Component{

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

    getAllSpeakerData = () =>{
        return axios.get('http://localhost:4000/speakers')
        console.log('Hello world');
    }

    componentDidMount(){
    }

    componentWillUnmount(){}

    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col margintopbottom">
                            <h2>Home</h2>
                            <h6 className="margintopbottom20">
                                Silicon Valley Code Camp is a community event where
                                developers learn from fellow developers.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Index;