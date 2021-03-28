import React from 'react';
import { FadeTransform } from 'react-animation-components'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'



function RenderCard({ item, dishesLoading, dishesErrMess }) {

  if (dishesLoading) {
    return (<div className="container">
      <div className="row justify-content-center">
        <Loading />
      </div>
    </div>)
  }
  else if (dishesErrMess) {
    return (
      <h4>{dishesErrMess}</h4>
    );
  } else if (item == null) {
    return (<div className="container">
      <div className="row justify-content-center">
        <Loading />
      </div>
    </div>)
  } else {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>

    );
  }
}

function Home({ dish, promotion, leader, dishesLoading, dishesErrMess }) {

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish} dishesLoading={dishesLoading} dishesErrMess={dishesErrMess} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} dishesLoading={dishesLoading} dishesErrMess={dishesErrMess} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} dishesLoading={dishesLoading} dishesErrMess={dishesErrMess} />
        </div>
      </div>
    </div>
  );
}

export default Home;