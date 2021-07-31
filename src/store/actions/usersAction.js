import { SET_LOADER, CLOSE_LOADER, SET_USERS } from '../types/';
export const getUsers = async ({ dispatch }) => {
	try {
		dispatch({ type: SET_LOADER });
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		dispatch({ type: CLOSE_LOADER });
		dispatch({ type: SET_USERS, payload: users });
	} catch (error) {
		dispatch({ type: CLOSE_LOADER });
		console.log(error);
	}
};
