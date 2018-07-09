import React, {Component} from "react";
import './Info.css';
import martha from './index.jpg'

class Info extends Component {
    render() {
        return (
            <div className="info">
                <img id={'martha'} src={martha} alt={'Martha'}></img>

            </div>
        );
    }
}

export default Info;