import React, {Component} from "react";
import './SellingPoints.css';




class SellingPoints extends Component {
    render() {
        return (

            <div className={'sellingPoints'}>
                <div id={'pointOne'}><h4>Scherp geprijsd</h4></div>
                <div id={'pointTwo'}><h4>Liefde</h4></div>
                <div id={'pointThree'}><h4>Kleinschalig</h4></div>
            </div>


        );
    }
}

export default SellingPoints;