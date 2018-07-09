import React, {Component} from "react";
import './SellingPoints.css';
import heart from './heart.svg'
import money from './money-bill-alt.svg'
import minus from './search-minus.svg'

class SellingPoints extends Component {
    render() {
        return (

            <div className={'sellingPoints'}>
                <div id={'pointOne'}>
                    <img id={'icons'} src={money}/>
                    <h4 id={'titel'}>Scherp geprijsd</h4>
                </div>
                <div id={'pointTwo'}>
                    <img id={'icons'} src={heart}/>
                    <h4 id={'titel'}>Liefdevol</h4>
                </div>
                <div id={'pointThree'}>
                    <img id={'icons'} src={minus}/>
                    <h4 id={'titel'}>Kleinschalig</h4>
                </div>
            </div>


        );
    }
}

export default SellingPoints;