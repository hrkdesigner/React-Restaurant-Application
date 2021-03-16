import React, { Component } from 'react'
import Menu from "./MenuComponent";
import DishDetail from './DishdetailComponent '
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Navbar, NavbarBrand } from 'reactstrap'
import { Dishes } from '../initialData'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Dishes,
            selectedDish: null
        }
    }

    onDishSelect = (dishId) => {
        this.setState({ selectedDish: dishId })
    }

    onDishDetail = () => {
        const dishDetail = this.state.data.filter(dish => dish.id == this.state.selectedDish)[0]
        if (typeof dishDetail === 'undefined') {
            return null
        }
        else {
            return dishDetail
        }
    }

    render() {
        console.log(this.onDishDetail())
        return (
            <div>
                <Header />
                <Menu dishes={this.state.data} idDetail={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dishDetails={this.onDishDetail()} />
                <Footer />
            </div>
        )
    }
}

