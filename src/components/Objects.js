import React from 'react';
import '../style/Objects.css';
import icon1 from '../img/icon1.png';
import { Container,
  Row,
  Col,
  } from 'react-bootstrap';
import Objects2 from '../components/Objects2'

class Objects extends React.Component {
  render(){
    return (
      <div >
        <div className="objectsIcon1" >
          <img  src={icon1}/>
        </div>
        <h1 className="objecTitle">Наши объекты</h1>
        <div className="objectText" >
          <p>
              В рамках объединения системы организован полный технологический цикл,
              <br/>который включает в себя разработку концепции облицовки здания - в <br/>соответствии
              с потребительскими предпочтениями.
          </p> 
        </div>
        <Container className="block">
          <Row>
            <Col>
              <div className="quality">
                <h3>Качество</h3>
                <hr className="line"/>
                <p>
                  Благодаря стратегическому партнерству с
                  западными <br/>компаниями, продукция и проекты
                  всегда <br/>ассоциируются с передовыми западными
                  <br/> технологиями и высочайшим качеством исполнения.
                </p>
              </div>
            </Col>
            <Col>
              <div className="quality">
                <h3>Становление</h3>
                <hr className="line"/>
                <p>
                  Благодаря стратегическому партнерству с
                  западными <br/>компаниями, продукция и проекты
                  всегда <br/>ассоциируются с передовыми западными
                  <br/> технологиями и высочайшим качеством исполнения.
                </p>
              </div>
            </Col>
            <Col>
              <div className="quality">
                <h3>Надежность</h3>
                <hr className="line"/>
                <p>
                  Благодаря стратегическому партнерству с
                  западными <br/>компаниями, продукция и проекты
                  всегда <br/>ассоциируются с передовыми западными
                  <br/> технологиями и высочайшим качеством исполнения.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Objects2/>
      </div>
    );
  }

}

export default Objects;