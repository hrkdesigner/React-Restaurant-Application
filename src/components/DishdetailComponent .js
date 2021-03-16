import React, { Component } from 'react'
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap'


const DishDetail = (props) => {
    return (
        <div className='container mb-5'>
            <div className='row justify-content-center '>
                <RenderDish dish={props.dishDetails} />
            </div>
        </div>
    )
}

function RenderDish({ dish }) {
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
                    <RenderComments dishComments={dish.comments} />
                </div>
            </>
        )
    } else {
        return <div></div>
    }
}

function RenderComments({ dishComments }) {
    const comments = dishComments.map(comment => {
        return (
            <ul class="list-unstyled">
                <li>
                    <div>{comment.comment}</div>
                    <br />
                    <div>
                        <span>--{comment.author}, </span>
                        <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</span>
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

export default DishDetail
