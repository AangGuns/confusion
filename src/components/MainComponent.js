import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from './redux/ActionCreators';

// map redux store to make it become available to component
const mapStateToProps = state => {
    return{
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
  // return action object for adding a comment
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

class Main extends React.Component {

  // data from dishes.js lifted here (Main.js)
  constructor(props) {
    super(props);

  }

  render() {

    // declare component using var
    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotions={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          addComment={this.props.addComment}
        />
      );
    }
    
    return (
      <div>
        <Header />
        <Switch>
        {/* approach to specifying the component (not passing a props) */}
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
          {/*  (passing a props) */}
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          {/* default path */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// connect Main to redux store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
