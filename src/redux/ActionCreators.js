import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';



//POST a NEW COMMENT 
export const postComment =  (dishId, rating, author, comment) => dispatch => {
    let newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        }, error => { throw error })
        .then(newPost => newPost.json())
        .then(newPost => {
            dispatch(addComment(newPost))
        })
        .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });

}


export const addComment = (comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    }

}


//GET DISHES INFO FROM SERVER
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading());

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))

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
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
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

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
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