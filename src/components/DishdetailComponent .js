import React, { Component } from 'react'
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap'


export default class DishDetail extends Component {

    renderDish = (dish) => {
        if (dish !== null) {
            return (
                <>
                    <div className='col-12 col-md-5 m-1'>
                        <Card tag='li'>
                            <CardImg width='100%' src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle heading >{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(dish.comments)}
                    </div>
                </>
            )
        } else {
            return <div></div>
        }
    }

    

    renderComments = (dishComments) => {
        const comments = dishComments.map(comment => {
            return (
                <ul class="list-unstyled">
                    <li>
                        <div>{comment.comment}</div>
                        <br />
                        <div>
                            <span>--{comment.author}, </span>
                            <span>{comment.date}</span>
                        </div>
                    </li>
                </ul>
            )
        })

        if (dishComments !== null) {
            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            )
        } else {
            return <div></div>
        }
    }





    render() {
        return (
            <div className='row justify-content-center'>
                {this.renderDish(this.props.dishDetail)}
            </div>
        )
    }
}
