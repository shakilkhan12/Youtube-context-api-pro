import { SET_LOADER, CLOSE_LOADER, SET_USERS } from '../types';
const usersReducer = (state, { type, payload }) => {
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
	} else if (type === SET_USERS) {
		return {
			...state,
			users: payload,
		};
	} else {
		return state;
	}
};
export default usersReducer;
