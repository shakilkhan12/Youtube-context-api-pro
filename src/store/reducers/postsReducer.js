import { SET_LOADER, CLOSE_LOADER, SET_POSTS } from '../types';
const postsReducer = (state, { type, payload }) => {
	if (type === SET_LOADER) {
		return {
			...state,
			loader: true,
		};
	} else if (type === CLOSE_LOADER) {
		return {
			...state,
			loader: false,
		};
	} else if (type === SET_POSTS) {
		return {
			...state,
			posts: payload,
		};
	} else {
		return state;
	}
};
export default postsReducer;
