import React from 'react';
import{InputGroup,
        FormControl,
        Button,
        Form
    }from 'react-bootstrap';
import '../style/Feedback.css';


class Feedback extends React.Component {
    render(){
        return (
            <div className='feedbackImg'>
                <div className='title1'>
                    <h1 >Обратная связь</h1>
                    <h6 className='titleText'>Если у вас есть вопросы, оставьте ваши контактные
                        данные и мы свяжемся с вами.
                    </h6>
                </div>
                <div className='inputGroup'>
                    <div>
                        <InputGroup className="mb-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="E-mail"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <InputGroup className="mb-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Телефон"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <InputGroup className="mb-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Ваше имя"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="6" placeholder="Ваше обращение" />
                    </Form.Group>
                    <Button variant="success" className='buttonSend'>Отправить</Button>
                </div>
            </div>
        );
    }
}

export default Feedback;