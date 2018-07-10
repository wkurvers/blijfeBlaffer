import React, {Component} from "react";
import './Prijzen.css';
import two from './dogs-2-dogs.png'
import one from './sitting-dog-silhouette-5.jpg'
import three from './3dogs.png'

class Prijzen extends Component {
    render() {
        return (
            <div className="prijzen">
                <div id={'pageBanner'}>
                    <h2 id={'paginaText'}>Tarieven</h2>
                </div>
                <h1 id={'titelPrijzen'}>De tarieven</h1>
                <div id={'prijsKaart'}>

                    <div id={'grid'}>
                        <img id={'doggos'} src={one} alt={'one'}></img>
                        <h2 id={'prijs'}>15</h2>
                    </div>
                    <div id={'line'}></div>
                    <div id={'grid'}>
                        <img id={'doggos'} src={two} alt={'two'}></img>
                        <h2 id={'prijs'}>12,50</h2>
                        <h5 id={'euros'}>prijs in euro's per dag</h5>
                    </div>
                    <div id={'line'}></div>
                    <div id={'grid'}>
                        <img id={'doggos'} src={three} alt={'three'}></img>
                        <h2 id={'prijs'}>10</h2>
                    </div>

                </div>


            </div>
        );
    }
}

export default Prijzen;