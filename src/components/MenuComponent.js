import React, { Component } from 'react'
import Dishdetail from './DishdetailComponent '
import { Card, CardBody, CardText, CardTitle, CardImg, CardImgOverlay } from 'reactstrap'


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

    onRenderDishDetail = (dish) => {
        if (dish !== null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card tag='li'>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle heading >{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return <div></div>
        }
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
                    <div className='row  mt-5'>
                        {menu}
                    </div>
                    <div className='row '>
                        {this.onRenderDishDetail(this.state.selectedDish)}
                    </div>
                </div>
                <Dishdetail />
            </div>
        )
    }
}
