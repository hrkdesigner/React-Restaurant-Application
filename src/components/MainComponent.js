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
import { postComment, fetchDishes, fetchPromos, fetchComments } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import { actions } from 'react-redux-form'


const mapDispatchToProps = dispatch => ({

    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos())
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
        this.props.fetchComments()
        this.props.fetchPromos()
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter(dish => dish.featured == true)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured == true)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter(leader => leader.featured == true)[0]}
                />
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dishDetails={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    dishComments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
                    postComment={this.props.postComment}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    commentsErrMess={this.props.comments.errMess}

                />
            )
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes.dishes} />} />
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                    <Route path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Redirect to='/home' />
                </Switch>
                </CSSTransition>
          </TransitionGroup>
                <Footer />
            </div >

        )

    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

