import React, {Component} from "react";
import './WelkomTron.css';
import kinky from './index.jpg'



class WelkomTron extends Component {
    render() {
        return (

            <div className={'Tron'}>
                <h1 id={'nameText'}>De blije blaffer</h1>
                <h3 id={'subText'}>Voor honden groot en klein</h3>
                <div id={'overlay'}></div>
                <img id={'kinky'} src={kinky}/>
            </div>


        );
    }
}

export default WelkomTron;