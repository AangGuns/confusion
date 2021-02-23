import React from 'react';
// import Header from './HeaderComponent';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends React.Component {

  // data from dishes.js lifted here (Main.js)
  constructor(props) {
    super(props);

    // stores properties related to this component
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

    // function to change the state of selectedDish equal to the received parameter dish
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
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
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
