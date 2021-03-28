import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';
import {Dishes} from '../initialData'


export const addComment = (dishId, rating, author, comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    }

}



//DISHES
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading());

    return fetch('http://localhost:3001/dishes')
        .then(response => response.json())
        .then(x => {
            dispatch(addDishes(x))
        })
      
}



export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});



export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});



export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});






//COMMENTS:

export const fetchComments = () => (dispatch) => {    
    return fetch('http://localhost:3001/comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});



//Promotions
export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch('http://localhost:3001/leaders')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});