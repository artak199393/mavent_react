import React from 'react';
import '../style/Objects.css';
import slider from '../img/slider.png';
import arrow from '../img/arrow.png';
import arrow1 from '../img/arrow1.png'
import { Container,
  Row,
  Col,
  } from 'react-bootstrap';

  
class Objects2 extends React.Component {
  render(){
    return (
      <div className="objects2">
        <Container>
            <Row>
                <Col md={1} className="cursor1">
                  <img src={arrow}/>
                </Col>
                <Col className="objectImages" md={10}>
                  <img src={slider}/>
                </Col>
                <Col md={1}>
                  <img src={arrow1} className="cursor2"/> 
                </Col>
            </Row>
        </Container>
        <Container className="address">
            <Row>
                <Col md={4}>
                  <div>Название<br/><span>Гостинца</span></div>
                </Col>
                <Col  md={4}>
                  <div>Адрес<br/><span>г.Казань</span></div>
                </Col>
                <Col md={4}>
                  <div>Объём работ и тип Системы</div>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }

}

export default Objects2;