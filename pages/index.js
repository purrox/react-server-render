/**
 * Created by csalas on 1/14/19.
 */

import React, {Component} from 'react';
import Link from "next/link";
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
               <Link href = "sessions">
                   <a>Session</a>
               </Link>

              <ol>
                  { this.state.speakerData.map(
                      data =>
                          <li key={data.id}>
                              {`${data.firstName} ${data.lastName}`}
                          </li>
                  )}
              </ol>
           </div>
        )
    }

}

export default Index;