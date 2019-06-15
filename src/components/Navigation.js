import React from 'react';
import '../style/Navigation.css';
import{
    Navbar,
    Nav,
    Row,
    Image,
    Col,
}from 'react-bootstrap';
import Layer18 from '../img/Layer18.png';
import vk from '../img/vk.png';
import fb from '../img/fb.png';

class Navigation extends React.Component {
    render(){
        return (
            <div className='navCont'>
                <Navbar>
                    <Navbar.Brand href="#home">
                        <h2>
                            <span className='logoMav'>MAV</span><span className='logoEnt'>ENT</span>
                        </h2>
                    </Navbar.Brand>
                    <Nav className="headerMenu">
                        <Nav.Link eventKey="#products" className='headerMenulink'><p>ПРОДУКТЫ</p></Nav.Link>
                        <Nav.Link href="#objects" className='headerMenulink'><p>ОБЪЕКТЫ</p></Nav.Link>
                        <Nav.Link href="#/home/back contact" className='headerMenulink'><p>ОБРАТНАЯ СВЯЗЬ</p></Nav.Link>
                        <Nav.Link href="#/home/contact" className='headerMenulink'><p>КОНТАКТНЫ</p></Nav.Link>
                        <Nav.Link href="#/home/news" className='headerMenulink'><p>НОВОСТИ</p></Nav.Link>
                        <Row className='leng'>
                            <Col xs={6} md={4}>
                                <img src={Layer18} />
                            </Col>
                            <Col xs={6} md={4}>
                                <img src={vk} />
                            </Col>
                            <Col xs={6} md={4}>
                                <img src={fb} />
                            </Col>
                        </Row>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;