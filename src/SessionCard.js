/**
 * Created by csalas on 1/19/19.
 */
import React, {Component} from 'react';

class SessionCard extends Component {
    render() {
        return (
            <div className="card col-4 cardmin margintopbottom20">
                <div className="card-body">
                    <h4 className="card-title"><a href="#">{this.props.session.title}</a></h4>
                    <h6 className="card-title">{this.props.session.speakersNamesCsv}</h6>
                    <p className="card-text">{this.props.session.descriptionShort}</p>
                </div>
            </div>
        );
    }
}

export default SessionCard;
