import React, { Component } from 'react';
import './App.css';
import Header from'./header/Header.js';
import Footer from "./footer/Footer";
import Contact from "./contact/Contact.js";
import Prijzen from "./prijzen/Prijzen.js";
import Info from "./info/Info.js";
import FrontPageCarrousel from "./frontPageCarrousel/FrontPageCarrousel.js";
import {Route, BrowserRouter} from 'react-router-dom';
import WelkomTron from "./welkomTron/WelkomTron";
import SellingPoints from "./sellingPoints/SellingPoints";



class App extends Component {
  render() {

    return (


          <BrowserRouter>
              <div className="App">
              <Header/>

                  <div id={'secondLine'}>
                      <h1></h1>
                  </div>

                  <Route exact path="/" component={Home} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/prijzen" component={Prijzen} />
                  <Route path="/info" component={Info} />


              <Footer/>
              </div>
          </BrowserRouter>


    );
  }
}

class Home extends Component {
    render() {
        return (
            <div>

                <main>
                    <WelkomTron/>
                    <SellingPoints/>

                </main>

            </div>

        );
    }
}



export default App;
