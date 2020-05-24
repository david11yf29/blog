import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async function(dispatch, getState) {

        const response = await jsonPlaceholder.get('/posts');

        // Action 內部先 dispatch action
        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        })
    }
}