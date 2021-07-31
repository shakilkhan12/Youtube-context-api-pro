import { useContext } from 'react';
import { postsContext, usersContext } from '../store/contexts';

const Header = () => {
	const { state } = useContext(usersContext);
	const { postsState } = useContext(postsContext);
	console.log('header users: ', state);
	console.log('header posts: ', postsState);
	return (
		<>
			<h1>Header users length : {state.users.length}</h1>
			<h2>header posts length: {postsState.posts.length}</h2>
		</>
	);
};
export default Header;
