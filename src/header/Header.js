import React, {Component} from "react";
import './Header.css';
import puppy from './dog.png'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <div id={'logoContainer'}>
                        <a href="/">
                            <img id={'logo'} src={puppy} />
                        </a>
                    </div>

                    <div className="topnav">
                        <a href="/info">Wie</a>
                        <a href="/prijzen">Tarieven</a>
                        <a href="/locatie">Locatie</a>
                        <a href="/contact">Contact</a>
                    </div>

                </div>





            </div>
        );
    }
}

export default Header;
