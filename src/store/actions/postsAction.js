import { SET_LOADER, CLOSE_LOADER, SET_POSTS } from '../types/';
export const getPosts = async ({ dispatch }) => {
	try {
		dispatch({ type: SET_LOADER });
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await response.json();
		console.log(posts);
		dispatch({ type: CLOSE_LOADER });
		dispatch({ type: SET_POSTS, payload: posts });
	} catch (error) {
		dispatch({ type: CLOSE_LOADER });
		console.log(error);
	}
};
