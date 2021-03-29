import React from 'react';
import { FadeTransform } from 'react-animation-components'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'



function RenderCard({ item, isLoading, errMess }) {

  if (isLoading) {
    return (<div className="container">
      <div className="row justify-content-center">
        <Loading />
      </div>
    </div>)
  }
  else if (errMess) {
    return (
      <h4>{errMess}</h4>
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

function Home({ dish, promotion, leader, dishesLoading, dishesErrMess, promoErrMess, promoLoading, leaderLoading, leaderErrMess }) {

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish} isLoading={dishesLoading} errMess={dishesErrMess} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} isLoading={promoLoading} errMess={promoErrMess} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} isLoading={leaderLoading} errMess={leaderErrMess} />
        </div>
      </div>
    </div>
  );
}

export default Home;