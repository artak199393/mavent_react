import React from 'react';
import { Container,
         Row,
         Col,
         Image 
    
  } from 'react-bootstrap';
import item from '../img/item.png';
import item5 from '../img/item5.png';
import styles from '../style/ProductStyle';
import {css} from 'aphrodite';
import '../App.css'



class FasadSistem extends React.Component {
  render(){
    return (
      <div >
          <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={item}  />
      <span>Крепление кассетных панелей скрытым способом на H профильa</span>
    </Col>
    <Col xs={6} md={4}>
      <Image src={item}  />
    </Col>
    <Col xs={6} md={4}>
      <Image src={item}  />
    </Col>
  </Row>
</Container>
      </div>
      
    );
  }
  
}

export default FasadSistem;