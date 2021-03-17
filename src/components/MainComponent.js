import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Menu from "./MenuComponent";
import DishDetail from './DishdetailComponent '
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './Home'
import Contact from './ContactComponent'
import { DISHES } from '../shared/dishes'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import { COMMENTS } from '../shared/comments'




export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            comments: COMMENTS
        }
    }


    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter(item => item.featured == true)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured == true)[0]}
                    leader={this.state.leaders.filter(leader => leader.featured == true)[0]}
                />
            )
        }

        const DishWithId = ({match}) => {
            return (
                <DishDetail 
                    dishDetails={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    dishComments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))} 
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div >

        )

    }
}



