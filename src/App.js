import React from 'react';

import Navigation from './Navigation';
import { Button } from 'reactstrap';
import Carusel from './Carusel'
import Product from './components/Product';
import MaventSistem from './components/MaventSistem';
import Objects from './components/Objects'



class App extends React.Component {
  render(){
    return (
      <div >
      <Navigation/>
      <Carusel/>
      <Product/>
      <MaventSistem/>
      <Objects/>
      </div>
    );
  }
  
}

export default App;
