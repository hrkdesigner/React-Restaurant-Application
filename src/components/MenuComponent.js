import React from 'react'
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl'

const RenderMenuItem = ({ dish }) => {
    return (
        <Card tag='li'>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width='100%' src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle heading >{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )

}
const Menu = ({ dishes }) => {
    const menu = dishes.map(dish => {
        return (
            <div className='col-12 col-md-5 m-1' key={dish.id}>
                <RenderMenuItem dish={dish} />
            </div>
        )
    })
    return (
        <div className="container">
                <div className="row ">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row justify-content-center">
                    {menu}
                </div>
            </div>
    )
}

export default Menu
