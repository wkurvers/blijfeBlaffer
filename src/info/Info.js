import React, {Component} from "react";
import './Info.css';
import martha from './index.jpg'
import takkie from './takkie2.jpg'
import kinky from './kinky2.jpg'

class Info extends Component {
    render() {
        return (
            <div className="info">
                <div id={'overMij'}>
                    <h2 id={'paginaText'}>Over mij</h2>
                </div>

                <div id={'mijnText'}>
                  <pre>{`
                       Mijn naam is Martha Ritsema en ik heb meer als 40 jaar professioneel met dieren gewerkt.
                       Begonnen in een Hondenpension/kennel en daarna in de weekenden stalhulp/trainer van dravers terwijl
                       ik doordeweeks werkzaam was als dierverzorger bij de Rijksuniversiteit in Groningen.
                       De opleiding als dierenartsassistente heb ik ook voltooid en ben twee jaar werkzaam geweest
                       in een dierenartspraktijk in Groningen. Mijn hele leven ben ik omringd door mijn eigen dieren honden,katten,
                       paarden, konijnen, fretten,vissen enz. Afgelopen jaar ben ik 4 maand werkzaam geweest op een geitenboerderij
                       in Frankrijk en heb daar alles geleerd van geiten en kaasmaken. Bij terugkomst in Nederland heb ik besloten om
                       kleinschalig een Hondenopvang te beginnen omdat dieren voor mij een invulling zijn van een zinvol bestaan.
                       Mocht je hier ooit op bezoek komen dan ga je kennismaken met mijn twee oude hondendames Kinki en
                       Takkie 12 en 17 jaar oud, Bas mijn kaketoe en mijn twee minipaardjes Damira en zoon Coltan.
                  `}
                </pre>
                </div>

                <h1 id={'teamText'}>Het team</h1>
                <div id={'holder'}>
                    <div id={'photos'}>
                        <div id={'teamText'}>
                            <img id={'martha'} src={martha} alt={'Martha'}></img>
                            <h5 id={'name'}>Martha Ritsema</h5>
                            <h6 id={'position'}>Eigenaar</h6>
                        </div>

                        <div id={'teamText'}>
                            <img id={'martha2'} src={takkie} alt={'takkie'}></img>
                            <h5 id={'name'}>Takkie Ritsema</h5>
                            <h6 id={'position'}>Beveiliging</h6>
                        </div>

                        <div id={'teamText'}>
                            <img id={'martha3'} src={kinky} alt={'kinky'}></img>
                            <h5 id={'name'}>Kinky Ritsema</h5>
                            <h6 id={'position'}>Blije blaffer</h6>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}

export default Info;