import { useReducer } from 'react';
import { postsContext } from '../contexts';
import { postsReducer } from '../reducers';

const PostsProvider = (props) => {
	const [postsState, dispatch] = useReducer(postsReducer, {
		loader: false,
		posts: [],
	});
	return (
		<postsContext.Provider value={{ postsState, dispatch }}>
			{props.children}
		</postsContext.Provider>
	);
};
export default PostsProvider;
