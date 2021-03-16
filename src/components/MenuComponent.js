import React from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap'

const RenderMenuItem = ({ dish, idDetail }) => {
    return (
        <Card onClick={() => idDetail(dish.id)} tag='li'>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle heading >{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )

}
const Menu = ({ dishes, idDetail }) => {
    const menu = dishes.map(dish => {
        return (
            <div className='col-12 col-md-5 m-1' key={dish.id}>
                <RenderMenuItem dish={dish} idDetail={idDetail} />
            </div>
        )
    })
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    {menu}
                </div>
            </div>
        </div>
    )
}

export default Menu
