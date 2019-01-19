/**
 * Created by csalas on 1/14/19.
 */

import React, {Component} from 'react';
import './DigitalClock.css'

class DigitalClock extends Component {

    render() {
        const date = new Date(this.props.time)
        let h = date.getHours();
        let m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
        let s = date.getSeconds();
        let session = h > 12 ? 'PM': 'AM';

        const time = `${h}:${m}:${s} ${session}`

        return (
            <div className="clock">
                {time}
            </div>
        );
    }
}

DigitalClock.propTypes = {};

export default DigitalClock;
