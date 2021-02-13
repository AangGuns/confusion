import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
// import './App.css';

class App extends React.Component {

  // data from dishes.js lifted here (App.js)
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fu</NavbarBrand>
          </div>
        </Navbar>
        {/* menu component. Using state.dishes as props*/}
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
