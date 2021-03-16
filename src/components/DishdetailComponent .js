import React, { Component } from 'react'
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap'



const DishDetail = ({ dishDetails }) => {
    return (
        <div className='container mb-5'>
            <div className='row justify-content-center '>
                <RenderDish dish={dishDetails} />
                <RenderComments dishComments={dishDetails.comments} />
            </div>
        </div>
    )
}

function RenderDish({ dish }) {
    console.log(dish)
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
        return <div>hello</div>
    }
}

function RenderComments({ dishComments }) {
    // const comments = dishComments.map(comment => {
    //     return (
    //         <div className='col-12 col-md-5 m-1'>
    //             <ul class="list-unstyled">
    //                 <li>
    //                     <div>{comment.comment}</div>
    //                     <br />
    //                     <div>
    //                         <span>--{comment.author}, </span>
    //                         <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</span>
    //                     </div>
    //                 </li>
    //             </ul>
    //         </div>
    //     )
    // })

    if (dishComments !== null) {
        return (
            <div>
                <h4>Comments</h4>
                comment place
            </div>
        )
    } else {
        return <div></div>
    }
}

export default DishDetail
