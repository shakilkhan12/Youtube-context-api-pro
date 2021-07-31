import { useContext, useEffect } from 'react';
import usersContext from '../store/contexts/usersContext';
import { getUsers } from '../store/actions';
const UsersList = () => {
	const { state, dispatch } = useContext(usersContext);
	useEffect(() => {
		getUsers({ dispatch });
	}, []);
	console.log('userslist: ', state);
	return (
		<>
			<h1>users list length: {state.users.length}</h1>
		</>
	);
};
export default UsersList;
