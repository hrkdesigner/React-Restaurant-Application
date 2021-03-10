import React, { Component } from 'react'
import DishDetail from './DishdetailComponent '
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap'


export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect = (dish) => {
        this.setState({ selectedDish: dish })
    }


    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div className='col-12 col-md-5 m-1' key={dish.id}>
                    <Card onClick={() => this.onDishSelect(dish)} tag='li'>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle heading >{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return (
            <div>
                <div className='container'>
                    <div className='row justify-content-center mt-5'>
                        {menu}
                    </div>
                    <DishDetail dishDetail={this.state.selectedDish} />
                </div>
            </div>
        )
    }
}
