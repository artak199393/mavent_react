import React from 'react';

import Navigation from './components/Navigation';
import { Button } from 'reactstrap';
import Carusel from './components/Carusel'
import Product from './components/Product';
import MaventSistem from './components/MaventSistem';
import Objects from './components/Objects';
import Feedback from './components/Feedback'
import ContactDetails from './components/ContactDetails';
import LatesNews from './components/LatestNews';
import Footer from './components/Footer'

class App extends React.Component {
  render(){
    return (
      <div >
      <Navigation/>
      <Carusel/>
      <Product/>
      <MaventSistem/>
      <Objects/>
      <Feedback/>
      <ContactDetails/>
      <LatesNews/>
      <Footer/>
      </div>
    );
  }
  
}

export default App;
