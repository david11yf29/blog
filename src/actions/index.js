import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async function(dispatch, getState) {

        const response = await jsonPlaceholder.get('/posts');
        // Action 內部先 dispatch action
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }
}

// export const fetchUser = (id) => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);

//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         })
//     }
// }

export const fetchUser = (id) => {
    return function (dispatch, getState) {
        _fetchUser(id, dispatch);
    }
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
})