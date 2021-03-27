import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Menu from "./MenuComponent";
import DishDetail from './DishdetailComponent '
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './Home'
import Contact from './ContactComponent'
import About from './AboutComponent'
import { addComment, fetchDishes } from '../redux/ActionCreators';




const mapDispatchToProps = dispatch => ({

    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes())

});

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}



class Main extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchDishes()
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter(item => item.featured == true)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured == true)[0]}
                    leader={this.props.leaders.filter(leader => leader.featured == true)[0]}
                    dishesLoading = {this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                />
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dishDetails={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    dishComments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                    dishesLoading = {this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}

                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes.dishes} />} />
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div >

        )

    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

