import React from 'react';
import{
    Container,
    Row,
    Col,
}from 'react-bootstrap';
import '../style/LatestNews.css';

class LatestNews extends React.Component {
    render(){
        return (
            <div>
                <h1 className='title'>Последние новости</h1>
                <Container className='conteiner'>
                    <Row>
                        <Col xs={6} md={4}>
                            <div className='news'>
                                <p className='newsText'>Тест описание</p>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='allNews'>
                                <p className='allNewsText'>Посмотреть<br/> остальные новости</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LatestNews;