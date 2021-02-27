import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {

  // data from dishes.js lifted here (Main.js)
  constructor(props) {
    super(props);

    // stores properties related to this component
    this.state = {
      dishes: DISHES,
    };
  }

  render() {

    // declare component using var
    const HomePage = () => {
      return (
        <Home />
      );
    }
    
    return (
      <div>
        <Header />
        <Switch>
        {/* approach to specifying the component (not passing a props) */}
          <Route path="/home" component={HomePage} />
          {/*  (passing a props) */}
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          {/* default path */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
