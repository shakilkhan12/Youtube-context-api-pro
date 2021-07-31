import { useReducer } from 'react';
import { usersContext } from '../contexts';
import { usersReducer } from '../reducers';
import UsersList from '../../components/UsersList';
const UsersProvider = (props) => {
	const [state, dispatch] = useReducer(usersReducer, {
		loader: false,
		users: [],
	});
	return (
		<usersContext.Provider value={{ state, dispatch }}>
			{props.children}
		</usersContext.Provider>
	);
};
export default UsersProvider;
