import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm'
import { Loading } from './LoadingComponent';



const DishDetail = ({ dishDetails, dishComments, addComment, dishesErrMess, dishesLoading }) => {
    if (dishesLoading) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (dishesErrMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{dishesErrMess}</h4>
                </div>
            </div>
        );
    }
    else if (dishDetails != null) {
        return (
            <div className='container '>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dishDetails.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dishDetails.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center '>
                    <RenderDish dish={dishDetails} />
                    <RenderComments dishComments={dishComments} addComment={addComment} dishId={dishDetails.id} />
                </div>
            </div>
        )
    }

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
            </>
        )
    } else {
        return <div></div>
    }
}

function RenderComments({ dishComments, addComment, dishId }) {
    const comments = dishComments.map(comment => {
        return (
            <div className='col-12 m-1' key={comment.id}>
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
            </div>
        )
    })

    if (dishComments !== null) {
        return (
            <div>
                <h4 className='ml-3'>Comments</h4>
                {comments}
                <CommentForm addComment={addComment} dishId={dishId} />
            </div>
        )
    } else {
        return <div>No comments!</div>
    }
}


export default DishDetail
