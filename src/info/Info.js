import React, {Component} from "react";
import './Info.css';
import martha from './index.jpg'

class Info extends Component {
    render() {
        return (
            <div className="info">
                <div id={'overMij'}>
                    <h2 id={'paginaText'}>Over mij</h2>
                </div>

                <div id={'mijnText'}>
                  <pre>{`
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form,by injected humour, or randomised words which don't look even slightly believable.
                      If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                  `}
                </pre>
                </div>

                <h1 id={'teamText'}>Het team</h1>
                <div id={'photos'}>
                    <img id={'martha'} src={martha} alt={'Martha'}></img>
                    <img id={'martha2'} src={martha} alt={'Martha'}></img>
                    <img id={'martha3'} src={martha} alt={'Martha'}></img>
                </div>



            </div>
        );
    }
}

export default Info;