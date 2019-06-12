import React from 'react';
import {  
  Nav, 
  Navbar,
 
} from 'react-bootstrap';
import {css} from 'aphrodite';
import styles from './NavigationStyle';
import vk from './img/vk.png';
import fb from './img/fb.png';
import Layer18 from './img/Layer18.png'

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      show: false, 
      lng: "en" 
    };
  }
  selectDropdown = (eventKey)=>{
    this.setState({lng:eventKey});
  }
  render(){
    const {state} = this;
    return (
      <div className={css(styles. NavbarFixed)}>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><span className={css(styles.logo1)}>MAV</span><span className={css(styles.logo2)}>ENT</span></Navbar.Brand>
  
   
  <Navbar.Collapse id="basic-navbar-nav" className={css(styles.navLink)}>
    
    <Nav className="mr-auto" >
      <Nav.Link href="#1">ПРОДУКТЫ</Nav.Link>
      <Nav.Link href="#2">ОБЪЕКТЫ</Nav.Link>
      <Nav.Link href="#3">ОБРАТНАЯ СВЯЗЬ</Nav.Link>
      <Nav.Link href="#4">КОНТАКТЫ</Nav.Link>
      <Nav.Link href="#5">НОВОСТИ</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  <div>
      
        <img
          src={Layer18}/>
    
        
        
    
  </div>
  
  <img src={vk}></img>
<img src={fb}></img>
    

</Navbar>
      


      </div>
    );
  }
  
}

export default Navigation;