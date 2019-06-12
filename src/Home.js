import React from 'react';
import './App.css';

class Home extends React.Component {
  render(){
    return (
      <div className="App">
      Home Component
      <ButtonToolbar>
      <DropdownButton 
      // onMouseOver = {()=>{this.setState({show:true})}}
      // onMouseOut = {()=>{this.setState({show:false})}}
        drop={"left"}
        variant="secondary"
        title={state.lng}
        id={`dropdown-button-drop-left`}
        key={"left"}
        // show = {state.show}
      >
        { state.lng === "en" &&
          <Dropdown.Item eventKey="ru" onSelect={this.selectDropdown} width="50px"><img
          src={Layer18}
        /></Dropdown.Item>
        }
        {
          state.lng === "ru" &&
          <Dropdown.Item eventKey="en" onSelect={this.selectDropdown}>en</Dropdown.Item>
        }
        
      </DropdownButton>
  </ButtonToolbar>
      </div>
    );
  }
  
}

export default Home;
