import React from 'react';
import{
        Container,
        Row,
        Col
    }from 'react-bootstrap';
import '../style/ContactDetails.css';
import Iframe from 'react-iframe';
import merged from '../img/merged.png';

class ContactDetails extends React.Component {
    render(){
        return (
            <div >
                <h1 className='contactTitle'>Контактные данные</h1>
                <div className='contact'>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            <h4>Рабочий телефон и факс</h4>
                            <p>+79927772727<br/>+37477825555<br/>+74991100028</p>
                        </Col>
                        <Col md="auto">
                            <h4>Физический адрес</h4>
                            <p>ул. Александры Монаховой, 10,
                                <br/>Москва, Московская обл., Россия,
                                <br/>142770
                            </p>   
                        </Col>
                        <Col xs lg="4">
                            <h4>Контактный email</h4>
                            <p>mav@mavent.ru</p>
                        </Col>
                    </Row>
                </Container>
                </div>
                <div className='mapDiv'>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.216225729443!2d-89.2391164!3d48.45238070000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d5921616d61c26b%3A0x15e5407d2071c8dd!2s109+Hogarth+St%2C+Thunder+Bay%2C+ON+P7A+7G8!5e0!3m2!1sen!2sca!4v1424371524427"
                        width="100%"
                        height="450px"
                        id="myId"
                        className="map"
                        position="relative"/>
                </div>
                <div >
                    <img src={merged} className='sponsr'/>
                </div>
            </div>
        );
    }
}

export default ContactDetails;